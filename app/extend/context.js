module.exports = {
	/**
	 * validate data with rules
	 *
	 * @param  {Object} rules  - validate rule object, see [parameter](https://github.com/node-modules/parameter)
	 * @param  {Object} [data] - validate target, default to `this.request.body`
	 */
	validate(rules, data) {
		data = data || this.request.body
		const errors = this.app.validator.validate(rules, data)

		if (errors) {
			let msg = 'Validation Failed'
			if (Array.isArray(errors)) {
				msg +=
					' => ' +
					errors
						.map(
							({ code, field, message }) =>
								`[${code}] field: ${field} | message: ${message}`
						)
						.join('; ')
			}
			this.throw(422, msg, {
				code: 'invalid_param',
				errors
			})
		}
	}
}
