const Parameter = require('parameter')

const convert = type => {
	const defaultValue = type === 'array' ? [] : {}
	return value => {
		if (!value || ['undefined', 'null', 'NaN'].includes(value)) return defaultValue
		// if (type === 'object' && /^\[.*\]$/.test(value))
		// 	throw new TypeError('The parameter should be object')
		if (type === 'array' && /^\{.*\}$/.test(value))
			throw new TypeError('The parameter should be array')
		try {
			return JSON.parse(value)
		} catch {
			throw new TypeError('Please check the json string')
		}
	}
}

module.exports = app => {
	/**
	 * Validate
	 */
	app.validator = new Parameter(app.config.validate)
	app.validator.addRule(
		'object',
		(rule, value) => {
			if (typeof value === 'string') {
				try {
					JSON.parse(value)
				} catch (err) {
					return 'must be json string'
				}
			}
		},
		true,
		convert('object')
	)
	app.validator.addRule(
		'array',
		(rule, value) => {
			if (typeof value === 'string') {
				try {
					JSON.parse(value)
				} catch (err) {
					return 'must be array json string'
				}
			}
		},
		true,
		convert('array')
	)
}
