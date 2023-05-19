import "@moonbeam-network/api-augment";
import { expect, describeSuite, beforeAll } from "@moonwall/cli";
import {
  ALITH_ADDRESS,
} from "@moonwall/util";
import { expectTypeOf } from "vitest";
import {
  encodeFunctionData,
} from "viem";
import {
  TransactionTypes,
  deployAndCreateCompiledContract,
} from "../../../helpers/viem.js";
import { verifyLatestBlockFees } from "../../../helpers/block.js";
import { createEthersTxn } from "../../../helpers/ethers.js";
import { Abi } from "abitype";

// TODO: expand these tests to do multiple txn types when added to viem
describeSuite({
  id: "D0603",
  title: "Contract loop error",
  foundationMethods: "dev",
  testCases: ({ context, it, log }) => {
    let looperAddress: `0x${string}`;
    let looperAbi: Abi;

    beforeAll(async () => {
      const { contractAddress, abi } = await deployAndCreateCompiledContract(context, "Looper");

      looperAddress = contractAddress;
      looperAbi = abi;
    });

    for (const txnType of TransactionTypes) {
      it({
        id: `T0${TransactionTypes.indexOf(txnType) + 1}`,
        title: `"should return OutOfGas on inifinite loop ${txnType} call`,
        test: async function () {
          expect(
            async () =>
              await context.viemClient("public").call({
                account: ALITH_ADDRESS,
                to: looperAddress,
                data: encodeFunctionData({ abi: looperAbi, functionName: "infinite", args: [] }),
                gas: 12_000_000n,
              }),
            "Execution succeeded but should have failed"
          ).rejects.toThrowError("out of gas");
        },
      });

      it({
        id: `T0${TransactionTypes.indexOf(txnType) * 2 + 1}`,
        title: `should fail with OutOfGas on infinite loop ${txnType} transaction`,
        test: async function () {
          const {rawSigned} = await createEthersTxn(context, {
            to: looperAddress,
            data: encodeFunctionData({ abi: looperAbi, functionName: "infinite", args: [] }),
            txnType,
          });

          const { result } = await context.createBlock(rawSigned);
          const receipt = await context
            .viemClient("public")
            .getTransactionReceipt({ hash: result!.hash as `0x${string}` });
          expect(receipt.status).toBe("reverted");
        },
      });

      it({
        id: `T0${TransactionTypes.indexOf(txnType) * 3 + 1}`,
        title: `should fail with OutOfGas on infinite loop ${txnType} transaction - check fees`,
        test: async function () {
          
          const {rawSigned} = await createEthersTxn(context, {
            to: looperAddress,
            data: encodeFunctionData({ abi: looperAbi, functionName: "infinite", args: [] }),
            txnType,
          });

          await context.createBlock(rawSigned);
          await verifyLatestBlockFees(context);
        },
      });
    }
  },
});

