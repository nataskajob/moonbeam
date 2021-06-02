(function() {var implementors = {};
implementors["account"] = [{"text":"impl Freeze for EthereumSignature","synthetic":true,"types":[]},{"text":"impl Freeze for EthereumSigner","synthetic":true,"types":[]}];
implementors["moonbase_runtime"] = [{"text":"impl Freeze for SessionKeys","synthetic":true,"types":[]},{"text":"impl Freeze for BlockHashCount","synthetic":true,"types":[]},{"text":"impl Freeze for Version","synthetic":true,"types":[]},{"text":"impl Freeze for BlockWeights","synthetic":true,"types":[]},{"text":"impl Freeze for BlockLength","synthetic":true,"types":[]},{"text":"impl Freeze for SS58Prefix","synthetic":true,"types":[]},{"text":"impl Freeze for MinimumPeriod","synthetic":true,"types":[]},{"text":"impl Freeze for MaxLocks","synthetic":true,"types":[]},{"text":"impl Freeze for ExistentialDeposit","synthetic":true,"types":[]},{"text":"impl&lt;R&gt; Freeze for DealWithFees&lt;R&gt;","synthetic":true,"types":[]},{"text":"impl Freeze for TransactionByteFee","synthetic":true,"types":[]},{"text":"impl Freeze for MoonbeamGasWeightMapping","synthetic":true,"types":[]},{"text":"impl Freeze for BlockGasLimit","synthetic":true,"types":[]},{"text":"impl Freeze for FixedGasPrice","synthetic":true,"types":[]},{"text":"impl Freeze for MaximumSchedulerWeight","synthetic":true,"types":[]},{"text":"impl Freeze for CouncilMotionDuration","synthetic":true,"types":[]},{"text":"impl Freeze for CouncilMaxProposals","synthetic":true,"types":[]},{"text":"impl Freeze for CouncilMaxMembers","synthetic":true,"types":[]},{"text":"impl Freeze for TechComitteeMotionDuration","synthetic":true,"types":[]},{"text":"impl Freeze for TechComitteeMaxProposals","synthetic":true,"types":[]},{"text":"impl Freeze for TechComitteeMaxMembers","synthetic":true,"types":[]},{"text":"impl Freeze for LaunchPeriod","synthetic":true,"types":[]},{"text":"impl Freeze for VotingPeriod","synthetic":true,"types":[]},{"text":"impl Freeze for FastTrackVotingPeriod","synthetic":true,"types":[]},{"text":"impl Freeze for EnactmentPeriod","synthetic":true,"types":[]},{"text":"impl Freeze for CooloffPeriod","synthetic":true,"types":[]},{"text":"impl Freeze for MinimumDeposit","synthetic":true,"types":[]},{"text":"impl Freeze for MaxVotes","synthetic":true,"types":[]},{"text":"impl Freeze for MaxProposals","synthetic":true,"types":[]},{"text":"impl Freeze for PreimageByteDeposit","synthetic":true,"types":[]},{"text":"impl Freeze for InstantAllowed","synthetic":true,"types":[]},{"text":"impl Freeze for ProposalBond","synthetic":true,"types":[]},{"text":"impl Freeze for ProposalBondMinimum","synthetic":true,"types":[]},{"text":"impl Freeze for SpendPeriod","synthetic":true,"types":[]},{"text":"impl Freeze for CommunityTreasuryId","synthetic":true,"types":[]},{"text":"impl Freeze for ParachainBondPalletId","synthetic":true,"types":[]},{"text":"impl Freeze for MaxApprovals","synthetic":true,"types":[]},{"text":"impl Freeze for TransactionConverter","synthetic":true,"types":[]},{"text":"impl Freeze for ReservedXcmpWeight","synthetic":true,"types":[]},{"text":"impl Freeze for MinBlocksPerRound","synthetic":true,"types":[]},{"text":"impl Freeze for DefaultBlocksPerRound","synthetic":true,"types":[]},{"text":"impl Freeze for BondDuration","synthetic":true,"types":[]},{"text":"impl Freeze for MinSelectedCandidates","synthetic":true,"types":[]},{"text":"impl Freeze for MaxNominatorsPerCollator","synthetic":true,"types":[]},{"text":"impl Freeze for MaxCollatorsPerNominator","synthetic":true,"types":[]},{"text":"impl Freeze for DefaultCollatorCommission","synthetic":true,"types":[]},{"text":"impl Freeze for MinCollatorStk","synthetic":true,"types":[]},{"text":"impl Freeze for MinNominatorStk","synthetic":true,"types":[]},{"text":"impl Freeze for VestingPeriod","synthetic":true,"types":[]},{"text":"impl Freeze for MinimumReward","synthetic":true,"types":[]},{"text":"impl Freeze for Initialized","synthetic":true,"types":[]},{"text":"impl Freeze for InitializationPayment","synthetic":true,"types":[]},{"text":"impl Freeze for DepositAmount","synthetic":true,"types":[]},{"text":"impl Freeze for ProxyDepositBase","synthetic":true,"types":[]},{"text":"impl Freeze for ProxyDepositFactor","synthetic":true,"types":[]},{"text":"impl Freeze for MaxProxies","synthetic":true,"types":[]},{"text":"impl Freeze for AnnouncementDepositBase","synthetic":true,"types":[]},{"text":"impl Freeze for AnnouncementDepositFactor","synthetic":true,"types":[]},{"text":"impl Freeze for MaxPending","synthetic":true,"types":[]},{"text":"impl Freeze for ProxyType","synthetic":true,"types":[]},{"text":"impl Freeze for Runtime","synthetic":true,"types":[]},{"text":"impl Freeze for Event","synthetic":true,"types":[]},{"text":"impl Freeze for Origin","synthetic":true,"types":[]},{"text":"impl Freeze for OriginCaller","synthetic":true,"types":[]},{"text":"impl Freeze for PalletInfo","synthetic":true,"types":[]},{"text":"impl Freeze for Call","synthetic":true,"types":[]},{"text":"impl Freeze for GenesisConfig","synthetic":true,"types":[]},{"text":"impl Freeze for RuntimeApi","synthetic":true,"types":[]},{"text":"impl&lt;Block, C&gt; !Freeze for RuntimeApiImpl&lt;Block, C&gt;","synthetic":true,"types":[]}];
implementors["moonbeam_cli"] = [{"text":"impl Freeze for Subcommand","synthetic":true,"types":[]},{"text":"impl Freeze for BuildSpecCommand","synthetic":true,"types":[]},{"text":"impl Freeze for ExportGenesisStateCommand","synthetic":true,"types":[]},{"text":"impl Freeze for ExportGenesisWasmCommand","synthetic":true,"types":[]},{"text":"impl Freeze for RunCmd","synthetic":true,"types":[]},{"text":"impl Freeze for Cli","synthetic":true,"types":[]},{"text":"impl Freeze for RelayChainCli","synthetic":true,"types":[]}];
implementors["moonbeam_cli_opt"] = [{"text":"impl Freeze for Sealing","synthetic":true,"types":[]},{"text":"impl Freeze for EthApi","synthetic":true,"types":[]},{"text":"impl Freeze for RpcConfig","synthetic":true,"types":[]}];
implementors["moonbeam_evm_tracer"] = [{"text":"impl Freeze for CallListTracer","synthetic":true,"types":[]},{"text":"impl Freeze for RawTracer","synthetic":true,"types":[]}];
implementors["moonbeam_rpc_core_debug"] = [{"text":"impl Freeze for TraceParams","synthetic":true,"types":[]}];
implementors["moonbeam_rpc_core_trace"] = [{"text":"impl Freeze for FilterRequest","synthetic":true,"types":[]},{"text":"impl Freeze for RequestBlockId","synthetic":true,"types":[]},{"text":"impl Freeze for RequestBlockTag","synthetic":true,"types":[]}];
implementors["moonbeam_rpc_core_txpool"] = [{"text":"impl Freeze for Transaction","synthetic":true,"types":[]},{"text":"impl Freeze for Summary","synthetic":true,"types":[]},{"text":"impl&lt;T&gt; Freeze for TxPoolResult&lt;T&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;T: Freeze,&nbsp;</span>","synthetic":true,"types":[]}];
implementors["moonbeam_rpc_debug"] = [{"text":"impl Freeze for Debug","synthetic":true,"types":[]},{"text":"impl&lt;B, C, BE&gt; Freeze for DebugHandler&lt;B, C, BE&gt;","synthetic":true,"types":[]}];
implementors["moonbeam_rpc_primitives_debug"] = [{"text":"impl Freeze for TransactionTrace","synthetic":true,"types":[]},{"text":"impl Freeze for TransactionTraceAction","synthetic":true,"types":[]},{"text":"impl Freeze for TransactionTraceOutput","synthetic":true,"types":[]},{"text":"impl Freeze for TransactionTraceResult","synthetic":true,"types":[]},{"text":"impl Freeze for TraceType","synthetic":true,"types":[]},{"text":"impl Freeze for TransactionTrace","synthetic":true,"types":[]},{"text":"impl Freeze for RawStepLog","synthetic":true,"types":[]},{"text":"impl Freeze for CallInner","synthetic":true,"types":[]},{"text":"impl Freeze for Call","synthetic":true,"types":[]},{"text":"impl Freeze for CallResult","synthetic":true,"types":[]},{"text":"impl Freeze for CreateResult","synthetic":true,"types":[]},{"text":"impl Freeze for CallType","synthetic":true,"types":[]},{"text":"impl Freeze for CreateType","synthetic":true,"types":[]}];
implementors["moonbeam_rpc_primitives_txpool"] = [{"text":"impl Freeze for TxPoolResponse","synthetic":true,"types":[]}];
implementors["moonbeam_rpc_trace"] = [{"text":"impl&lt;B, C&gt; Freeze for Trace&lt;B, C&gt;","synthetic":true,"types":[]},{"text":"impl Freeze for CacheBatchId","synthetic":true,"types":[]},{"text":"impl Freeze for CacheRequester","synthetic":true,"types":[]},{"text":"impl&lt;B, C, BE&gt; Freeze for CacheTask&lt;B, C, BE&gt;","synthetic":true,"types":[]}];
implementors["moonbeam_rpc_txpool"] = [{"text":"impl&lt;B, C, A&gt; Freeze for TxPool&lt;B, C, A&gt;","synthetic":true,"types":[]}];
implementors["moonbeam_runtime"] = [{"text":"impl Freeze for SessionKeys","synthetic":true,"types":[]},{"text":"impl Freeze for BaseFilter","synthetic":true,"types":[]},{"text":"impl Freeze for BlockHashCount","synthetic":true,"types":[]},{"text":"impl Freeze for Version","synthetic":true,"types":[]},{"text":"impl Freeze for BlockWeights","synthetic":true,"types":[]},{"text":"impl Freeze for BlockLength","synthetic":true,"types":[]},{"text":"impl Freeze for SS58Prefix","synthetic":true,"types":[]},{"text":"impl Freeze for MinimumPeriod","synthetic":true,"types":[]},{"text":"impl Freeze for MaxLocks","synthetic":true,"types":[]},{"text":"impl Freeze for ExistentialDeposit","synthetic":true,"types":[]},{"text":"impl&lt;R&gt; Freeze for DealWithFees&lt;R&gt;","synthetic":true,"types":[]},{"text":"impl Freeze for TransactionByteFee","synthetic":true,"types":[]},{"text":"impl Freeze for MoonbeamGasWeightMapping","synthetic":true,"types":[]},{"text":"impl Freeze for BlockGasLimit","synthetic":true,"types":[]},{"text":"impl Freeze for FixedGasPrice","synthetic":true,"types":[]},{"text":"impl Freeze for MaximumSchedulerWeight","synthetic":true,"types":[]},{"text":"impl Freeze for CouncilMotionDuration","synthetic":true,"types":[]},{"text":"impl Freeze for CouncilMaxProposals","synthetic":true,"types":[]},{"text":"impl Freeze for CouncilMaxMembers","synthetic":true,"types":[]},{"text":"impl Freeze for TechComitteeMotionDuration","synthetic":true,"types":[]},{"text":"impl Freeze for TechComitteeMaxProposals","synthetic":true,"types":[]},{"text":"impl Freeze for TechComitteeMaxMembers","synthetic":true,"types":[]},{"text":"impl Freeze for LaunchPeriod","synthetic":true,"types":[]},{"text":"impl Freeze for VotingPeriod","synthetic":true,"types":[]},{"text":"impl Freeze for FastTrackVotingPeriod","synthetic":true,"types":[]},{"text":"impl Freeze for EnactmentPeriod","synthetic":true,"types":[]},{"text":"impl Freeze for CooloffPeriod","synthetic":true,"types":[]},{"text":"impl Freeze for MinimumDeposit","synthetic":true,"types":[]},{"text":"impl Freeze for MaxVotes","synthetic":true,"types":[]},{"text":"impl Freeze for MaxProposals","synthetic":true,"types":[]},{"text":"impl Freeze for PreimageByteDeposit","synthetic":true,"types":[]},{"text":"impl Freeze for InstantAllowed","synthetic":true,"types":[]},{"text":"impl Freeze for ProposalBond","synthetic":true,"types":[]},{"text":"impl Freeze for ProposalBondMinimum","synthetic":true,"types":[]},{"text":"impl Freeze for SpendPeriod","synthetic":true,"types":[]},{"text":"impl Freeze for CommunityTreasuryId","synthetic":true,"types":[]},{"text":"impl Freeze for ParachainBondPalletId","synthetic":true,"types":[]},{"text":"impl Freeze for MaxApprovals","synthetic":true,"types":[]},{"text":"impl Freeze for TransactionConverter","synthetic":true,"types":[]},{"text":"impl Freeze for ReservedXcmpWeight","synthetic":true,"types":[]},{"text":"impl Freeze for MinBlocksPerRound","synthetic":true,"types":[]},{"text":"impl Freeze for DefaultBlocksPerRound","synthetic":true,"types":[]},{"text":"impl Freeze for BondDuration","synthetic":true,"types":[]},{"text":"impl Freeze for MinSelectedCandidates","synthetic":true,"types":[]},{"text":"impl Freeze for MaxNominatorsPerCollator","synthetic":true,"types":[]},{"text":"impl Freeze for MaxCollatorsPerNominator","synthetic":true,"types":[]},{"text":"impl Freeze for DefaultCollatorCommission","synthetic":true,"types":[]},{"text":"impl Freeze for MinCollatorStk","synthetic":true,"types":[]},{"text":"impl Freeze for MinNominatorStk","synthetic":true,"types":[]},{"text":"impl Freeze for VestingPeriod","synthetic":true,"types":[]},{"text":"impl Freeze for MinimumReward","synthetic":true,"types":[]},{"text":"impl Freeze for Initialized","synthetic":true,"types":[]},{"text":"impl Freeze for InitializationPayment","synthetic":true,"types":[]},{"text":"impl Freeze for DepositAmount","synthetic":true,"types":[]},{"text":"impl Freeze for ProxyDepositBase","synthetic":true,"types":[]},{"text":"impl Freeze for ProxyDepositFactor","synthetic":true,"types":[]},{"text":"impl Freeze for MaxProxies","synthetic":true,"types":[]},{"text":"impl Freeze for AnnouncementDepositBase","synthetic":true,"types":[]},{"text":"impl Freeze for AnnouncementDepositFactor","synthetic":true,"types":[]},{"text":"impl Freeze for MaxPending","synthetic":true,"types":[]},{"text":"impl Freeze for ProxyType","synthetic":true,"types":[]},{"text":"impl Freeze for Runtime","synthetic":true,"types":[]},{"text":"impl Freeze for Event","synthetic":true,"types":[]},{"text":"impl Freeze for Origin","synthetic":true,"types":[]},{"text":"impl Freeze for OriginCaller","synthetic":true,"types":[]},{"text":"impl Freeze for PalletInfo","synthetic":true,"types":[]},{"text":"impl Freeze for Call","synthetic":true,"types":[]},{"text":"impl Freeze for GenesisConfig","synthetic":true,"types":[]},{"text":"impl Freeze for RuntimeApi","synthetic":true,"types":[]},{"text":"impl&lt;Block, C&gt; !Freeze for RuntimeApiImpl&lt;Block, C&gt;","synthetic":true,"types":[]}];
implementors["moonbeam_service"] = [{"text":"impl Freeze for Extensions","synthetic":true,"types":[]},{"text":"impl Freeze for ExtensionsFork","synthetic":true,"types":[]},{"text":"impl Freeze for Client","synthetic":true,"types":[]},{"text":"impl Freeze for MoonbeamExecutor","synthetic":true,"types":[]},{"text":"impl Freeze for MoonriverExecutor","synthetic":true,"types":[]},{"text":"impl Freeze for MoonshadowExecutor","synthetic":true,"types":[]},{"text":"impl Freeze for MoonbaseExecutor","synthetic":true,"types":[]},{"text":"impl Freeze for TransactionConverters","synthetic":true,"types":[]}];
implementors["moonkey"] = [{"text":"impl Freeze for Opts","synthetic":true,"types":[]}];
implementors["moonriver_runtime"] = [{"text":"impl Freeze for SessionKeys","synthetic":true,"types":[]},{"text":"impl Freeze for BaseFilter","synthetic":true,"types":[]},{"text":"impl Freeze for BlockHashCount","synthetic":true,"types":[]},{"text":"impl Freeze for Version","synthetic":true,"types":[]},{"text":"impl Freeze for BlockWeights","synthetic":true,"types":[]},{"text":"impl Freeze for BlockLength","synthetic":true,"types":[]},{"text":"impl Freeze for SS58Prefix","synthetic":true,"types":[]},{"text":"impl Freeze for MinimumPeriod","synthetic":true,"types":[]},{"text":"impl Freeze for MaxLocks","synthetic":true,"types":[]},{"text":"impl Freeze for ExistentialDeposit","synthetic":true,"types":[]},{"text":"impl&lt;R&gt; Freeze for DealWithFees&lt;R&gt;","synthetic":true,"types":[]},{"text":"impl Freeze for TransactionByteFee","synthetic":true,"types":[]},{"text":"impl Freeze for MoonbeamGasWeightMapping","synthetic":true,"types":[]},{"text":"impl Freeze for BlockGasLimit","synthetic":true,"types":[]},{"text":"impl Freeze for FixedGasPrice","synthetic":true,"types":[]},{"text":"impl Freeze for MaximumSchedulerWeight","synthetic":true,"types":[]},{"text":"impl Freeze for CouncilMotionDuration","synthetic":true,"types":[]},{"text":"impl Freeze for CouncilMaxProposals","synthetic":true,"types":[]},{"text":"impl Freeze for CouncilMaxMembers","synthetic":true,"types":[]},{"text":"impl Freeze for TechComitteeMotionDuration","synthetic":true,"types":[]},{"text":"impl Freeze for TechComitteeMaxProposals","synthetic":true,"types":[]},{"text":"impl Freeze for TechComitteeMaxMembers","synthetic":true,"types":[]},{"text":"impl Freeze for LaunchPeriod","synthetic":true,"types":[]},{"text":"impl Freeze for VotingPeriod","synthetic":true,"types":[]},{"text":"impl Freeze for FastTrackVotingPeriod","synthetic":true,"types":[]},{"text":"impl Freeze for EnactmentPeriod","synthetic":true,"types":[]},{"text":"impl Freeze for CooloffPeriod","synthetic":true,"types":[]},{"text":"impl Freeze for MinimumDeposit","synthetic":true,"types":[]},{"text":"impl Freeze for MaxVotes","synthetic":true,"types":[]},{"text":"impl Freeze for MaxProposals","synthetic":true,"types":[]},{"text":"impl Freeze for PreimageByteDeposit","synthetic":true,"types":[]},{"text":"impl Freeze for InstantAllowed","synthetic":true,"types":[]},{"text":"impl Freeze for ProposalBond","synthetic":true,"types":[]},{"text":"impl Freeze for ProposalBondMinimum","synthetic":true,"types":[]},{"text":"impl Freeze for SpendPeriod","synthetic":true,"types":[]},{"text":"impl Freeze for CommunityTreasuryId","synthetic":true,"types":[]},{"text":"impl Freeze for ParachainBondPalletId","synthetic":true,"types":[]},{"text":"impl Freeze for MaxApprovals","synthetic":true,"types":[]},{"text":"impl Freeze for TransactionConverter","synthetic":true,"types":[]},{"text":"impl Freeze for ReservedXcmpWeight","synthetic":true,"types":[]},{"text":"impl Freeze for MinBlocksPerRound","synthetic":true,"types":[]},{"text":"impl Freeze for DefaultBlocksPerRound","synthetic":true,"types":[]},{"text":"impl Freeze for BondDuration","synthetic":true,"types":[]},{"text":"impl Freeze for MinSelectedCandidates","synthetic":true,"types":[]},{"text":"impl Freeze for MaxNominatorsPerCollator","synthetic":true,"types":[]},{"text":"impl Freeze for MaxCollatorsPerNominator","synthetic":true,"types":[]},{"text":"impl Freeze for DefaultCollatorCommission","synthetic":true,"types":[]},{"text":"impl Freeze for MinCollatorStk","synthetic":true,"types":[]},{"text":"impl Freeze for MinNominatorStk","synthetic":true,"types":[]},{"text":"impl Freeze for VestingPeriod","synthetic":true,"types":[]},{"text":"impl Freeze for MinimumReward","synthetic":true,"types":[]},{"text":"impl Freeze for Initialized","synthetic":true,"types":[]},{"text":"impl Freeze for InitializationPayment","synthetic":true,"types":[]},{"text":"impl Freeze for DepositAmount","synthetic":true,"types":[]},{"text":"impl Freeze for ProxyDepositBase","synthetic":true,"types":[]},{"text":"impl Freeze for ProxyDepositFactor","synthetic":true,"types":[]},{"text":"impl Freeze for MaxProxies","synthetic":true,"types":[]},{"text":"impl Freeze for AnnouncementDepositBase","synthetic":true,"types":[]},{"text":"impl Freeze for AnnouncementDepositFactor","synthetic":true,"types":[]},{"text":"impl Freeze for MaxPending","synthetic":true,"types":[]},{"text":"impl Freeze for ProxyType","synthetic":true,"types":[]},{"text":"impl Freeze for Runtime","synthetic":true,"types":[]},{"text":"impl Freeze for Event","synthetic":true,"types":[]},{"text":"impl Freeze for Origin","synthetic":true,"types":[]},{"text":"impl Freeze for OriginCaller","synthetic":true,"types":[]},{"text":"impl Freeze for PalletInfo","synthetic":true,"types":[]},{"text":"impl Freeze for Call","synthetic":true,"types":[]},{"text":"impl Freeze for GenesisConfig","synthetic":true,"types":[]},{"text":"impl Freeze for RuntimeApi","synthetic":true,"types":[]},{"text":"impl&lt;Block, C&gt; !Freeze for RuntimeApiImpl&lt;Block, C&gt;","synthetic":true,"types":[]}];
implementors["moonshadow_runtime"] = [{"text":"impl Freeze for SessionKeys","synthetic":true,"types":[]},{"text":"impl Freeze for BaseFilter","synthetic":true,"types":[]},{"text":"impl Freeze for BlockHashCount","synthetic":true,"types":[]},{"text":"impl Freeze for Version","synthetic":true,"types":[]},{"text":"impl Freeze for BlockWeights","synthetic":true,"types":[]},{"text":"impl Freeze for BlockLength","synthetic":true,"types":[]},{"text":"impl Freeze for SS58Prefix","synthetic":true,"types":[]},{"text":"impl Freeze for MinimumPeriod","synthetic":true,"types":[]},{"text":"impl Freeze for MaxLocks","synthetic":true,"types":[]},{"text":"impl Freeze for ExistentialDeposit","synthetic":true,"types":[]},{"text":"impl&lt;R&gt; Freeze for DealWithFees&lt;R&gt;","synthetic":true,"types":[]},{"text":"impl Freeze for TransactionByteFee","synthetic":true,"types":[]},{"text":"impl Freeze for MoonbeamGasWeightMapping","synthetic":true,"types":[]},{"text":"impl Freeze for BlockGasLimit","synthetic":true,"types":[]},{"text":"impl Freeze for FixedGasPrice","synthetic":true,"types":[]},{"text":"impl Freeze for MaximumSchedulerWeight","synthetic":true,"types":[]},{"text":"impl Freeze for CouncilMotionDuration","synthetic":true,"types":[]},{"text":"impl Freeze for CouncilMaxProposals","synthetic":true,"types":[]},{"text":"impl Freeze for CouncilMaxMembers","synthetic":true,"types":[]},{"text":"impl Freeze for TechComitteeMotionDuration","synthetic":true,"types":[]},{"text":"impl Freeze for TechComitteeMaxProposals","synthetic":true,"types":[]},{"text":"impl Freeze for TechComitteeMaxMembers","synthetic":true,"types":[]},{"text":"impl Freeze for LaunchPeriod","synthetic":true,"types":[]},{"text":"impl Freeze for VotingPeriod","synthetic":true,"types":[]},{"text":"impl Freeze for FastTrackVotingPeriod","synthetic":true,"types":[]},{"text":"impl Freeze for EnactmentPeriod","synthetic":true,"types":[]},{"text":"impl Freeze for CooloffPeriod","synthetic":true,"types":[]},{"text":"impl Freeze for MinimumDeposit","synthetic":true,"types":[]},{"text":"impl Freeze for MaxVotes","synthetic":true,"types":[]},{"text":"impl Freeze for MaxProposals","synthetic":true,"types":[]},{"text":"impl Freeze for PreimageByteDeposit","synthetic":true,"types":[]},{"text":"impl Freeze for InstantAllowed","synthetic":true,"types":[]},{"text":"impl Freeze for ProposalBond","synthetic":true,"types":[]},{"text":"impl Freeze for ProposalBondMinimum","synthetic":true,"types":[]},{"text":"impl Freeze for SpendPeriod","synthetic":true,"types":[]},{"text":"impl Freeze for CommunityTreasuryId","synthetic":true,"types":[]},{"text":"impl Freeze for ParachainBondPalletId","synthetic":true,"types":[]},{"text":"impl Freeze for MaxApprovals","synthetic":true,"types":[]},{"text":"impl Freeze for TransactionConverter","synthetic":true,"types":[]},{"text":"impl Freeze for ReservedXcmpWeight","synthetic":true,"types":[]},{"text":"impl Freeze for MinBlocksPerRound","synthetic":true,"types":[]},{"text":"impl Freeze for DefaultBlocksPerRound","synthetic":true,"types":[]},{"text":"impl Freeze for BondDuration","synthetic":true,"types":[]},{"text":"impl Freeze for MinSelectedCandidates","synthetic":true,"types":[]},{"text":"impl Freeze for MaxNominatorsPerCollator","synthetic":true,"types":[]},{"text":"impl Freeze for MaxCollatorsPerNominator","synthetic":true,"types":[]},{"text":"impl Freeze for DefaultCollatorCommission","synthetic":true,"types":[]},{"text":"impl Freeze for MinCollatorStk","synthetic":true,"types":[]},{"text":"impl Freeze for MinNominatorStk","synthetic":true,"types":[]},{"text":"impl Freeze for VestingPeriod","synthetic":true,"types":[]},{"text":"impl Freeze for MinimumReward","synthetic":true,"types":[]},{"text":"impl Freeze for Initialized","synthetic":true,"types":[]},{"text":"impl Freeze for InitializationPayment","synthetic":true,"types":[]},{"text":"impl Freeze for DepositAmount","synthetic":true,"types":[]},{"text":"impl Freeze for ProxyDepositBase","synthetic":true,"types":[]},{"text":"impl Freeze for ProxyDepositFactor","synthetic":true,"types":[]},{"text":"impl Freeze for MaxProxies","synthetic":true,"types":[]},{"text":"impl Freeze for AnnouncementDepositBase","synthetic":true,"types":[]},{"text":"impl Freeze for AnnouncementDepositFactor","synthetic":true,"types":[]},{"text":"impl Freeze for MaxPending","synthetic":true,"types":[]},{"text":"impl Freeze for ProxyType","synthetic":true,"types":[]},{"text":"impl Freeze for Runtime","synthetic":true,"types":[]},{"text":"impl Freeze for Event","synthetic":true,"types":[]},{"text":"impl Freeze for Origin","synthetic":true,"types":[]},{"text":"impl Freeze for OriginCaller","synthetic":true,"types":[]},{"text":"impl Freeze for PalletInfo","synthetic":true,"types":[]},{"text":"impl Freeze for Call","synthetic":true,"types":[]},{"text":"impl Freeze for GenesisConfig","synthetic":true,"types":[]},{"text":"impl Freeze for RuntimeApi","synthetic":true,"types":[]},{"text":"impl&lt;Block, C&gt; !Freeze for RuntimeApiImpl&lt;Block, C&gt;","synthetic":true,"types":[]}];
implementors["pallet_author_mapping"] = [{"text":"impl&lt;AccountId, Balance&gt; Freeze for RegistrationInfo&lt;AccountId, Balance&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;AccountId: Freeze,<br>&nbsp;&nbsp;&nbsp;&nbsp;Balance: Freeze,&nbsp;</span>","synthetic":true,"types":[]},{"text":"impl&lt;T&gt; Freeze for Pallet&lt;T&gt;","synthetic":true,"types":[]},{"text":"impl&lt;T&gt; Freeze for Error&lt;T&gt;","synthetic":true,"types":[]},{"text":"impl&lt;T&gt; Freeze for Event&lt;T&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;&lt;T as Config&gt;::AccountId: Freeze,<br>&nbsp;&nbsp;&nbsp;&nbsp;&lt;T as Config&gt;::AuthorId: Freeze,&nbsp;</span>","synthetic":true,"types":[]},{"text":"impl&lt;T&gt; Freeze for GenesisConfig&lt;T&gt;","synthetic":true,"types":[]},{"text":"impl&lt;T&gt; Freeze for Call&lt;T&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;&lt;T as Config&gt;::AuthorId: Freeze,&nbsp;</span>","synthetic":true,"types":[]}];
implementors["pallet_ethereum_chain_id"] = [{"text":"impl&lt;T&gt; Freeze for Pallet&lt;T&gt;","synthetic":true,"types":[]},{"text":"impl Freeze for GenesisConfig","synthetic":true,"types":[]},{"text":"impl&lt;T&gt; Freeze for Call&lt;T&gt;","synthetic":true,"types":[]},{"text":"impl&lt;T&gt; Freeze for _GeneratedPrefixForStorageChainId&lt;T&gt;","synthetic":true,"types":[]}];
implementors["parachain_staking"] = [{"text":"impl&lt;T&gt; Freeze for Range&lt;T&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;T: Freeze,&nbsp;</span>","synthetic":true,"types":[]},{"text":"impl&lt;Balance&gt; Freeze for InflationInfo&lt;Balance&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;Balance: Freeze,&nbsp;</span>","synthetic":true,"types":[]},{"text":"impl&lt;T&gt; Freeze for SubstrateWeight&lt;T&gt;","synthetic":true,"types":[]},{"text":"impl&lt;T&gt; Freeze for Pallet&lt;T&gt;","synthetic":true,"types":[]},{"text":"impl&lt;AccountId, Balance&gt; Freeze for Bond&lt;AccountId, Balance&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;AccountId: Freeze,<br>&nbsp;&nbsp;&nbsp;&nbsp;Balance: Freeze,&nbsp;</span>","synthetic":true,"types":[]},{"text":"impl Freeze for CollatorStatus","synthetic":true,"types":[]},{"text":"impl&lt;AccountId, Balance&gt; Freeze for CollatorSnapshot&lt;AccountId, Balance&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;Balance: Freeze,&nbsp;</span>","synthetic":true,"types":[]},{"text":"impl&lt;AccountId, Balance&gt; Freeze for Collator&lt;AccountId, Balance&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;AccountId: Freeze,<br>&nbsp;&nbsp;&nbsp;&nbsp;Balance: Freeze,&nbsp;</span>","synthetic":true,"types":[]},{"text":"impl&lt;AccountId, Balance&gt; Freeze for Nominator&lt;AccountId, Balance&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;Balance: Freeze,&nbsp;</span>","synthetic":true,"types":[]},{"text":"impl&lt;BlockNumber&gt; Freeze for RoundInfo&lt;BlockNumber&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;BlockNumber: Freeze,&nbsp;</span>","synthetic":true,"types":[]},{"text":"impl&lt;T&gt; Freeze for Error&lt;T&gt;","synthetic":true,"types":[]},{"text":"impl&lt;T&gt; Freeze for Event&lt;T&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;&lt;T as Config&gt;::AccountId: Freeze,<br>&nbsp;&nbsp;&nbsp;&nbsp;&lt;&lt;T as Config&gt;::Currency as Currency&lt;&lt;T as Config&gt;::AccountId&gt;&gt;::Balance: Freeze,<br>&nbsp;&nbsp;&nbsp;&nbsp;&lt;T as Config&gt;::BlockNumber: Freeze,&nbsp;</span>","synthetic":true,"types":[]},{"text":"impl&lt;T&gt; Freeze for GenesisConfig&lt;T&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;&lt;&lt;T as Config&gt;::Currency as Currency&lt;&lt;T as Config&gt;::AccountId&gt;&gt;::Balance: Freeze,&nbsp;</span>","synthetic":true,"types":[]},{"text":"impl&lt;T&gt; Freeze for Call&lt;T&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;&lt;T as Config&gt;::AccountId: Freeze,<br>&nbsp;&nbsp;&nbsp;&nbsp;&lt;&lt;T as Config&gt;::Currency as Currency&lt;&lt;T as Config&gt;::AccountId&gt;&gt;::Balance: Freeze,&nbsp;</span>","synthetic":true,"types":[]},{"text":"impl&lt;T&gt; Freeze for _GeneratedPrefixForStorageAtStake&lt;T&gt;","synthetic":true,"types":[]},{"text":"impl&lt;T&gt; Freeze for _GeneratedPrefixForStorageStaked&lt;T&gt;","synthetic":true,"types":[]},{"text":"impl&lt;T&gt; Freeze for _GeneratedPrefixForStorageInflationConfig&lt;T&gt;","synthetic":true,"types":[]},{"text":"impl&lt;T&gt; Freeze for _GeneratedPrefixForStoragePoints&lt;T&gt;","synthetic":true,"types":[]},{"text":"impl&lt;T&gt; Freeze for _GeneratedPrefixForStorageAwardedPts&lt;T&gt;","synthetic":true,"types":[]}];
implementors["precompiles"] = [{"text":"impl&lt;R&gt; Freeze for MoonbeamPrecompiles&lt;R&gt;","synthetic":true,"types":[]}];
if (window.register_implementors) {window.register_implementors(implementors);} else {window.pending_implementors = implementors;}})()