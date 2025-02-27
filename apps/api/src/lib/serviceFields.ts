// Example:
// export const nocodb = [{
// 	name: 'postgreslUser',
// 	isEditable: false,
// 	isLowerCase: false,
// 	isNumber: false,
// 	isBoolean: false,
// 	isEncrypted: false
// }]

export const plausibleAnalytics = [{
	name: 'email',
	isEditable: true,
	isLowerCase: true,
	isNumber: false,
	isBoolean: false,
	isEncrypted: false
}, {
	name: 'username',
	isEditable: true,
	isLowerCase: false,
	isNumber: false,
	isBoolean: false,
	isEncrypted: false
},
{
	name: 'password',
	isEditable: false,
	isLowerCase: false,
	isNumber: false,
	isBoolean: false,
	isEncrypted: true
},
{
	name: 'postgresqlUser',
	isEditable: false,
	isLowerCase: false,
	isNumber: false,
	isBoolean: false,
	isEncrypted: false
},
{
	name: 'postgresqlPassword',
	isEditable: false,
	isLowerCase: false,
	isNumber: false,
	isBoolean: false,
	isEncrypted: true
},
{
	name: 'postgresqlDatabase',
	isEditable: false,
	isLowerCase: false,
	isNumber: false,
	isBoolean: false,
	isEncrypted: false
},
{
	name: 'postgresqlPublicPort',
	isEditable: false,
	isLowerCase: false,
	isNumber: true,
	isBoolean: false,
	isEncrypted: false
},
{
	name: 'secretKeyBase',
	isEditable: false,
	isLowerCase: false,
	isNumber: false,
	isBoolean: false,
	isEncrypted: true
},
{
	name: 'scriptName',
	isEditable: true,
	isLowerCase: false,
	isNumber: false,
	isBoolean: false,
	isEncrypted: false
}]
export const minio = [{
	name: 'apiFqdn',
	isEditable: true,
	isLowerCase: true,
	isNumber: false,
	isBoolean: false,
	isEncrypted: false
}, {
	name: 'rootUser',
	isEditable: false,
	isLowerCase: false,
	isNumber: false,
	isBoolean: false,
	isEncrypted: false
},
{
	name: 'rootUserPassword',
	isEditable: false,
	isLowerCase: false,
	isNumber: false,
	isBoolean: false,
	isEncrypted: true
}]
export const vscodeserver = [{
	name: 'password',
	isEditable: false,
	isLowerCase: false,
	isNumber: false,
	isBoolean: false,
	isEncrypted: true
}]
export const wordpress = [{
	name: 'extraConfig',
	isEditable: true,
	isLowerCase: false,
	isNumber: false,
	isBoolean: false,
	isEncrypted: false
},
{
	name: 'mysqlHost',
	isEditable: true,
	isLowerCase: false,
	isNumber: false,
	isBoolean: false,
	isEncrypted: false
},
{
	name: 'mysqlPort',
	isEditable: true,
	isLowerCase: false,
	isNumber: true,
	isBoolean: false,
	isEncrypted: false
},
{
	name: 'mysqlUser',
	isEditable: true,
	isLowerCase: false,
	isNumber: false,
	isBoolean: false,
	isEncrypted: false
},
{
	name: 'mysqlPassword',
	isEditable: true,
	isLowerCase: false,
	isNumber: false,
	isBoolean: false,
	isEncrypted: true
},
{
	name: 'mysqlRootUser',
	isEditable: true,
	isLowerCase: false,
	isNumber: false,
	isBoolean: false,
	isEncrypted: false
},
{
	name: 'mysqlRootUserPassword',
	isEditable: true,
	isLowerCase: false,
	isNumber: false,
	isBoolean: false,
	isEncrypted: true
},
{
	name: 'mysqlDatabase',
	isEditable: true,
	isLowerCase: false,
	isNumber: false,
	isBoolean: false,
	isEncrypted: false
},
{
	name: 'ftpPassword',
	isEditable: false,
	isLowerCase: false,
	isNumber: false,
	isBoolean: false,
	isEncrypted: true
}]
export const ghost = [{
	name: 'defaultEmail',
	isEditable: false,
	isLowerCase: true,
	isNumber: false,
	isBoolean: false,
	isEncrypted: false
},
{
	name: 'defaultPassword',
	isEditable: false,
	isLowerCase: false,
	isNumber: false,
	isBoolean: false,
	isEncrypted: true
},
{
	name: 'mariadbUser',
	isEditable: false,
	isLowerCase: false,
	isNumber: false,
	isBoolean: false,
	isEncrypted: false
},
{
	name: 'mariadbPassword',
	isEditable: false,
	isLowerCase: false,
	isNumber: false,
	isBoolean: false,
	isEncrypted: true
},
{
	name: 'mariadbRootUser',
	isEditable: false,
	isLowerCase: false,
	isNumber: false,
	isBoolean: false,
	isEncrypted: false
},
{
	name: 'mariadbRootUserPassword',
	isEditable: false,
	isLowerCase: false,
	isNumber: false,
	isBoolean: false,
	isEncrypted: true
},
{
	name: 'mariadbDatabase',
	isEditable: true,
	isLowerCase: false,
	isNumber: false,
	isBoolean: false,
	isEncrypted: false
}]
export const meiliSearch = [{
	name: 'masterKey',
	isEditable: false,
	isLowerCase: false,
	isNumber: false,
	isBoolean: false,
	isEncrypted: true
}]
export const umami = [{
	name: 'postgresqlUser',
	isEditable: false,
	isLowerCase: false,
	isNumber: false,
	isBoolean: false,
	isEncrypted: false
},
{
	name: 'postgresqlPassword',
	isEditable: false,
	isLowerCase: false,
	isNumber: false,
	isBoolean: false,
	isEncrypted: true
},
{
	name: 'postgresqlDatabase',
	isEditable: false,
	isLowerCase: false,
	isNumber: false,
	isBoolean: false,
	isEncrypted: false
},
{
	name: 'umamiAdminPassword',
	isEditable: false,
	isLowerCase: false,
	isNumber: false,
	isBoolean: false,
	isEncrypted: true
},
{
	name: 'hashSalt',
	isEditable: false,
	isLowerCase: false,
	isNumber: false,
	isBoolean: false,
	isEncrypted: true
}]
export const hasura = [{
	name: 'postgresqlUser',
	isEditable: false,
	isLowerCase: false,
	isNumber: false,
	isBoolean: false,
	isEncrypted: false
},
{
	name: 'postgresqlPassword',
	isEditable: false,
	isLowerCase: false,
	isNumber: false,
	isBoolean: false,
	isEncrypted: true
},
{
	name: 'postgresqlDatabase',
	isEditable: false,
	isLowerCase: false,
	isNumber: false,
	isBoolean: false,
	isEncrypted: false
},
{
	name: 'graphQLAdminPassword',
	isEditable: false,
	isLowerCase: false,
	isNumber: false,
	isBoolean: false,
	isEncrypted: true
}]
export const fider = [{
	name: 'jwtSecret',
	isEditable: false,
	isLowerCase: false,
	isNumber: false,
	isBoolean: false,
	isEncrypted: true
}, {
	name: 'postgreslUser',
	isEditable: false,
	isLowerCase: false,
	isNumber: false,
	isBoolean: false,
	isEncrypted: false
},
{
	name: 'postgresqlPassword',
	isEditable: false,
	isLowerCase: false,
	isNumber: false,
	isBoolean: false,
	isEncrypted: true
},
{
	name: 'emailNoreply',
	isEditable: true,
	isLowerCase: true,
	isNumber: false,
	isBoolean: false,
	isEncrypted: false
},
{
	name: 'emailSmtpHost',
	isEditable: true,
	isLowerCase: true,
	isNumber: false,
	isBoolean: false,
	isEncrypted: false
},
{
	name: 'emailSmtpPassword',
	isEditable: true,
	isLowerCase: false,
	isNumber: false,
	isBoolean: false,
	isEncrypted: true
},
{
	name: 'emailSmtpPort',
	isEditable: true,
	isLowerCase: false,
	isNumber: true,
	isBoolean: false,
	isEncrypted: false
},
{
	name: 'emailSmtpUser',
	isEditable: true,
	isLowerCase: true,
	isNumber: false,
	isBoolean: false,
	isEncrypted: false
},
{
	name: 'emailSmtpEnableStartTls',
	isEditable: true,
	isLowerCase: false,
	isNumber: false,
	isBoolean: true,
	isEncrypted: false
},
{
	name: 'emailMailgunApiKey',
	isEditable: true,
	isLowerCase: false,
	isNumber: false,
	isBoolean: false,
	isEncrypted: true
},
{
	name: 'emailMailgunDomain',
	isEditable: true,
	isLowerCase: true,
	isNumber: false,
	isBoolean: false,
	isEncrypted: false
},
{
	name: 'emailMailgunRegion',
	isEditable: true,
	isLowerCase: false,
	isNumber: false,
	isBoolean: false,
	isEncrypted: false
}]
export const moodle = [{
	name: 'defaultEmail',
	isEditable: true,
	isLowerCase: true,
	isNumber: false,
	isBoolean: false,
	isEncrypted: false
},
{
	name: 'defaultUsername',
	isEditable: true,
	isLowerCase: false,
	isNumber: false,
	isBoolean: false,
	isEncrypted: false
},
{
	name: 'defaultPassword',
	isEditable: false,
	isLowerCase: false,
	isNumber: false,
	isBoolean: false,
	isEncrypted: true
},
{
	name: 'mariadbUser',
	isEditable: false,
	isLowerCase: false,
	isNumber: false,
	isBoolean: false,
	isEncrypted: false
},
{
	name: 'mariadbPassword',
	isEditable: false,
	isLowerCase: false,
	isNumber: false,
	isBoolean: false,
	isEncrypted: true
},
{
	name: 'mariadbRootUser',
	isEditable: false,
	isLowerCase: false,
	isNumber: false,
	isBoolean: false,
	isEncrypted: false
},
{
	name: 'mariadbRootUserPassword',
	isEditable: false,
	isLowerCase: false,
	isNumber: false,
	isBoolean: false,
	isEncrypted: true
},
{
	name: 'mariadbDatabase',
	isEditable: true,
	isLowerCase: false,
	isNumber: false,
	isBoolean: false,
	isEncrypted: false
}]