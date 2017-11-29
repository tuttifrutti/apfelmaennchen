module.exports = {
	"env": {
		"browser": true,
		"jquery": true,
		"jasmine": true
	},
	"globals": {
		"Apfelmaennchen": false
	},
	"plugins": [
		"jasmine"
	],
	"extends": [
		"eslint:recommended",
		"plugin:jasmine/recommended"
	],
	"rules": {
		// possible errors
		"no-console": "off",
		"no-extra-parens": "off",
		"no-inner-declarations": [
			"error",
			"functions"
		],
		"valid-jsdoc": "off",

		// metrics
		"max-len": ["warn", 160],
		"max-statements": ["warn", 17],
		"complexity": ["error", 7],
		"max-depth": ["error", 4],
		"max-nested-callbacks": ["error", 5],
		"max-params": ["error", 8],

		// best practices
		"accessor-pairs": "error",
		"array-callback-return": "error",
		"block-scoped-var": "warn",
		"consistent-return": "off",
		"curly": "warn",
		"default-case": "error",
		"dot-location": ["warn", "property"],
		"dot-notation": "error",
		"eqeqeq": "warn",
		"guard-for-in": "error",
		"no-alert": "warn",
		"no-caller": "error",
		"no-div-regex": "error",
		"no-else-return": "warn",
		"no-empty-function": "error",
		"no-eq-null": "error",
		"no-eval": "error",
		"no-extend-native": "error",
		"no-extra-bind": "error",
		"no-extra-label": "error",
		"no-floating-decimal": "error",
		"no-implicit-coercion": "off",
		"no-implicit-globals": "warn",
		"no-implied-eval": "error",
		"no-invalid-this": "off",
		"no-iterator": "error",
		"no-labels": "error",
		"no-lone-blocks": "error",
		"no-loop-func": "error",
		"no-multi-spaces": "error",
		"no-multi-str": "error",
		"no-native-reassign": "error",
		"no-magic-numbers": ["off", {"ignoreArrayIndexes": true}],
		"no-new": "error",
		"no-new-func": "error",
		"no-new-wrappers": "error",
		"no-octal-escape": "error",
		"no-param-reassign": "off",
		"no-proto": "error",
		"no-return-assign": "error",
		"no-script-url": "error",
		"no-self-compare": "error",
		"no-sequences": "error",
		"no-throw-literal": "error",
		"no-unmodified-loop-condition": "error",
		"no-unused-expressions": "error",
		"no-useless-call": "error",
		"no-useless-concat": "error",
		"no-useless-escape": "error",
		"no-void": "error",
		"no-warning-comments": "warn",
		"no-with": "error",
		"radix": "error",
		"vars-on-top": "off",
		"wrap-iife": ["warn", "outside"],
		"yoda": [
			"error",
			"never"
		],

		// strict mode
		"strict": "error",

		// variables
		"init-declarations": "off",
		"no-catch-shadow": "error",
		"no-label-var": "error",
		"no-restricted-globals": "error",
		"no-shadow": "error",
		"no-shadow-restricted-names": "error",
		"no-undef-init": "off",
		"no-undefined": "off",
		"no-use-before-define": ["warn", {"functions": false}],

		// stylistic issues
		"array-bracket-spacing": "error",
		"block-spacing": "error",
		"brace-style": [
			"error",
			"1tbs"
		],
		"camelcase": "error",
		"comma-spacing": [
			"error",
			{
				"after": true,
				"before": false
			}
		],
		"comma-style": [
			"error",
			"last"
		],
		"computed-property-spacing": [
			"error",
			"never"
		],
		"consistent-this": ["error", "self"],
		"eol-last": "error",
		"func-names": "off",
		"func-style": ["warn", "declaration"],
		"id-blacklist": "off",
		"id-length": "off",
		"id-match": "off",
		"indent": ["error", "tab", { "SwitchCase": 1 }],
		"jsx-quotes": "error",
		"key-spacing": "error",
		"keyword-spacing": [
			"error",
			{
				"after": true,
				"before": true
			}
		],
		"linebreak-style": [
			"error",
			"unix"
		],
		"lines-around-comment": "off",
		"new-cap": "warn",
		"new-parens": "error",
		"newline-after-var": "off",
		"newline-before-return": "off",
		"newline-per-chained-call": "off",
		"no-array-constructor": "error",
		"no-bitwise": "error",
		"no-continue": "error",
		"no-inline-comments": "off",
		"no-ternary": "off",
		"no-lonely-if": "error",
		"no-multiple-empty-lines": "error",
		"no-negated-condition": "warn",
		"no-nested-ternary": "error",
		"no-new-object": "error",
		"no-plusplus": ["warn", { "allowForLoopAfterthoughts": true }],
		"no-restricted-syntax": "error",
		"no-spaced-func": "error",
		"no-trailing-spaces": "error",
		"no-underscore-dangle": "off",
		"no-unneeded-ternary": "error",
		"no-whitespace-before-property": "error",
		"object-curly-spacing": [
			"error",
			"never"
		],
		"one-var": ["error", "never"],
		"one-var-declaration-per-line": "error",
		"operator-assignment": "error",
		"operator-linebreak": "warn",
		"padded-blocks": "off",

		"quote-props": ["warn", "consistent-as-needed"],
		"quotes": ["off", "double"],
		"require-jsdoc": "off",
		"semi": "error",
		"semi-spacing": "error",
		"sort-imports": "error",
		"sort-vars": "error",
		"space-before-blocks": "error",
		"space-before-function-paren": "off",
		"space-in-parens": [
			"error",
			"never"
		],
		"space-infix-ops": "error",
		"space-unary-ops": "error",
		"spaced-comment": [
			"error",
			"always"
		],
		"wrap-regex": "error"
	}
};
