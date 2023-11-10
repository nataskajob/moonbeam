(function() {var implementors = {
"pallet_evm_precompile_proxy":[["impl&lt;Runtime&gt; <a class=\"trait\" href=\"precompile_utils/precompile_set/trait.SelectorFilter.html\" title=\"trait precompile_utils::precompile_set::SelectorFilter\">SelectorFilter</a> for <a class=\"struct\" href=\"pallet_evm_precompile_proxy/struct.OnlyIsProxyAndProxy.html\" title=\"struct pallet_evm_precompile_proxy::OnlyIsProxyAndProxy\">OnlyIsProxyAndProxy</a>&lt;Runtime&gt;<span class=\"where fmt-newline\">where\n    Runtime: Config + Config + Config + Config,\n    &lt;&lt;Runtime as Config&gt;::RuntimeCall as Dispatchable&gt;::RuntimeOrigin: <a class=\"trait\" href=\"https://doc.rust-lang.org/1.71.0/core/convert/trait.From.html\" title=\"trait core::convert::From\">From</a>&lt;<a class=\"enum\" href=\"https://doc.rust-lang.org/1.71.0/core/option/enum.Option.html\" title=\"enum core::option::Option\">Option</a>&lt;Runtime::AccountId&gt;&gt;,\n    &lt;Runtime as Config&gt;::ProxyType: Decode + <a class=\"trait\" href=\"pallet_evm_precompile_proxy/trait.EvmProxyCallFilter.html\" title=\"trait pallet_evm_precompile_proxy::EvmProxyCallFilter\">EvmProxyCallFilter</a>,\n    &lt;Runtime as Config&gt;::RuntimeCall: Dispatchable&lt;PostInfo = PostDispatchInfo&gt; + GetDispatchInfo + <a class=\"trait\" href=\"https://doc.rust-lang.org/1.71.0/core/convert/trait.From.html\" title=\"trait core::convert::From\">From</a>&lt;ProxyCall&lt;Runtime&gt;&gt; + <a class=\"trait\" href=\"https://doc.rust-lang.org/1.71.0/core/convert/trait.From.html\" title=\"trait core::convert::From\">From</a>&lt;BalancesCall&lt;Runtime&gt;&gt;,\n    &lt;&lt;Runtime as Config&gt;::RuntimeCall as Dispatchable&gt;::RuntimeOrigin: <a class=\"trait\" href=\"https://doc.rust-lang.org/1.71.0/core/convert/trait.From.html\" title=\"trait core::convert::From\">From</a>&lt;<a class=\"enum\" href=\"https://doc.rust-lang.org/1.71.0/core/option/enum.Option.html\" title=\"enum core::option::Option\">Option</a>&lt;Runtime::AccountId&gt;&gt;,\n    &lt;Runtime as Config&lt;<a class=\"primitive\" href=\"https://doc.rust-lang.org/1.71.0/std/primitive.unit.html\">()</a>&gt;&gt;::Balance: <a class=\"trait\" href=\"https://doc.rust-lang.org/1.71.0/core/convert/trait.TryFrom.html\" title=\"trait core::convert::TryFrom\">TryFrom</a>&lt;U256&gt; + <a class=\"trait\" href=\"https://doc.rust-lang.org/1.71.0/core/convert/trait.Into.html\" title=\"trait core::convert::Into\">Into</a>&lt;U256&gt;,</span>"],["impl&lt;Runtime&gt; <a class=\"trait\" href=\"precompile_utils/precompile_set/trait.SelectorFilter.html\" title=\"trait precompile_utils::precompile_set::SelectorFilter\">SelectorFilter</a> for <a class=\"struct\" href=\"pallet_evm_precompile_proxy/struct.OnlyIsProxy.html\" title=\"struct pallet_evm_precompile_proxy::OnlyIsProxy\">OnlyIsProxy</a>&lt;Runtime&gt;<span class=\"where fmt-newline\">where\n    Runtime: Config + Config + Config + Config,\n    &lt;&lt;Runtime as Config&gt;::RuntimeCall as Dispatchable&gt;::RuntimeOrigin: <a class=\"trait\" href=\"https://doc.rust-lang.org/1.71.0/core/convert/trait.From.html\" title=\"trait core::convert::From\">From</a>&lt;<a class=\"enum\" href=\"https://doc.rust-lang.org/1.71.0/core/option/enum.Option.html\" title=\"enum core::option::Option\">Option</a>&lt;Runtime::AccountId&gt;&gt;,\n    &lt;Runtime as Config&gt;::ProxyType: Decode + <a class=\"trait\" href=\"pallet_evm_precompile_proxy/trait.EvmProxyCallFilter.html\" title=\"trait pallet_evm_precompile_proxy::EvmProxyCallFilter\">EvmProxyCallFilter</a>,\n    &lt;Runtime as Config&gt;::RuntimeCall: Dispatchable&lt;PostInfo = PostDispatchInfo&gt; + GetDispatchInfo + <a class=\"trait\" href=\"https://doc.rust-lang.org/1.71.0/core/convert/trait.From.html\" title=\"trait core::convert::From\">From</a>&lt;ProxyCall&lt;Runtime&gt;&gt; + <a class=\"trait\" href=\"https://doc.rust-lang.org/1.71.0/core/convert/trait.From.html\" title=\"trait core::convert::From\">From</a>&lt;BalancesCall&lt;Runtime&gt;&gt;,\n    &lt;&lt;Runtime as Config&gt;::RuntimeCall as Dispatchable&gt;::RuntimeOrigin: <a class=\"trait\" href=\"https://doc.rust-lang.org/1.71.0/core/convert/trait.From.html\" title=\"trait core::convert::From\">From</a>&lt;<a class=\"enum\" href=\"https://doc.rust-lang.org/1.71.0/core/option/enum.Option.html\" title=\"enum core::option::Option\">Option</a>&lt;Runtime::AccountId&gt;&gt;,\n    &lt;Runtime as Config&lt;<a class=\"primitive\" href=\"https://doc.rust-lang.org/1.71.0/std/primitive.unit.html\">()</a>&gt;&gt;::Balance: <a class=\"trait\" href=\"https://doc.rust-lang.org/1.71.0/core/convert/trait.TryFrom.html\" title=\"trait core::convert::TryFrom\">TryFrom</a>&lt;U256&gt; + <a class=\"trait\" href=\"https://doc.rust-lang.org/1.71.0/core/convert/trait.Into.html\" title=\"trait core::convert::Into\">Into</a>&lt;U256&gt;,</span>"]],
"pallet_evm_precompile_xcm_utils":[["impl&lt;Runtime, XcmConfig&gt; <a class=\"trait\" href=\"precompile_utils/precompile_set/trait.SelectorFilter.html\" title=\"trait precompile_utils::precompile_set::SelectorFilter\">SelectorFilter</a> for <a class=\"struct\" href=\"pallet_evm_precompile_xcm_utils/struct.AllExceptXcmExecute.html\" title=\"struct pallet_evm_precompile_xcm_utils::AllExceptXcmExecute\">AllExceptXcmExecute</a>&lt;Runtime, XcmConfig&gt;<span class=\"where fmt-newline\">where\n    Runtime: Config + Config + Config,\n    <a class=\"type\" href=\"pallet_evm_precompile_xcm_utils/type.XcmOriginOf.html\" title=\"type pallet_evm_precompile_xcm_utils::XcmOriginOf\">XcmOriginOf</a>&lt;XcmConfig&gt;: OriginTrait,\n    <a class=\"type\" href=\"pallet_evm_precompile_xcm_utils/type.XcmAccountIdOf.html\" title=\"type pallet_evm_precompile_xcm_utils::XcmAccountIdOf\">XcmAccountIdOf</a>&lt;XcmConfig&gt;: <a class=\"trait\" href=\"https://doc.rust-lang.org/1.71.0/core/convert/trait.Into.html\" title=\"trait core::convert::Into\">Into</a>&lt;H160&gt;,\n    XcmConfig: Config,\n    <a class=\"type\" href=\"pallet_evm_precompile_xcm_utils/type.SystemCallOf.html\" title=\"type pallet_evm_precompile_xcm_utils::SystemCallOf\">SystemCallOf</a>&lt;Runtime&gt;: Dispatchable&lt;PostInfo = PostDispatchInfo&gt; + Decode + GetDispatchInfo,\n    &lt;&lt;Runtime as Config&gt;::RuntimeCall as Dispatchable&gt;::RuntimeOrigin: <a class=\"trait\" href=\"https://doc.rust-lang.org/1.71.0/core/convert/trait.From.html\" title=\"trait core::convert::From\">From</a>&lt;<a class=\"enum\" href=\"https://doc.rust-lang.org/1.71.0/core/option/enum.Option.html\" title=\"enum core::option::Option\">Option</a>&lt;Runtime::AccountId&gt;&gt;,\n    &lt;Runtime as Config&gt;::RuntimeCall: <a class=\"trait\" href=\"https://doc.rust-lang.org/1.71.0/core/convert/trait.From.html\" title=\"trait core::convert::From\">From</a>&lt;Call&lt;Runtime&gt;&gt;,</span>"]],
"precompile_utils":[]
};if (window.register_implementors) {window.register_implementors(implementors);} else {window.pending_implementors = implementors;}})()