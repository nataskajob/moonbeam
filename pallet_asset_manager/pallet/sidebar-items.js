initSidebarItems({"constant":[["PALLET_ID","The AssetManagers’s pallet id"]],"enum":[["Call","Contains one variant per dispatchable that can be called by an extrinsic."],["Error","An error that can occur while executing the mapping pallet’s logic."],["Event","The event emitted by this pallet."]],"struct":[["AssetInfo",""],["Pallet","The pallet implementing the on-chain logic."],["_GeneratedPrefixForStorageAssetIdType",""],["_GeneratedPrefixForStorageAssetTypeId",""],["_GeneratedPrefixForStorageAssetTypeUnitsPerSecond",""],["_GeneratedPrefixForStorageLocalAssetCounter",""],["_GeneratedPrefixForStorageLocalAssetDeposit",""],["_GeneratedPrefixForStorageSupportedFeePaymentAssets",""]],"trait":[["AssetRegistrar",""],["Config","Configuration trait of this pallet."],["LocalAssetIdCreator",""]],"type":[["AssetIdType","Mapping from an asset id to asset type. This is mostly used when receiving transaction specifying an asset directly, like transferring an asset from this chain to another."],["AssetTypeId","Reverse mapping of AssetIdType. Mapping from an asset type to an asset id. This is mostly used when receiving a multilocation XCM message to retrieve the corresponding asset in which tokens should me minted."],["AssetTypeUnitsPerSecond","Stores the units per second for local execution for a AssetType. This is used to know how to charge for XCM execution in a particular asset Not all assets might contain units per second, hence the different storage"],["LocalAssetCounter","Stores the counter of the number of local assets that have been created so far This value can be used to salt the creation of an assetId, e.g., by hashing it. This is particularly useful for cases like moonbeam where letting users choose their assetId would result in collision in the evm side."],["LocalAssetDeposit","Local asset deposits, a mapping from assetId to a struct holding the creator (from which the deposit was reserved) and the deposit amount"],["Module","Type alias to `Pallet`, to be used by `construct_runtime`."],["SupportedFeePaymentAssets",""]]});