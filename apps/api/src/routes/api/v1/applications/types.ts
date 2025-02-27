import type { OnlyId } from "../../../../types";

export interface SaveApplication extends OnlyId {
    Body: {
        name: string,
        buildPack: string,
        fqdn: string,
        port: number,
        exposePort: number,
        installCommand: string,
        buildCommand: string,
        startCommand: string,
        baseDirectory: string,
        publishDirectory: string,
        pythonWSGI: string,
        pythonModule: string,
        pythonVariable: string,
        dockerFileLocation: string,
        denoMainFile: string,
        denoOptions: string,
        baseImage: string,
        baseBuildImage: string,
        deploymentType: string
    }
}
export interface SaveApplicationSettings extends OnlyId {
    Querystring: { domain: string; };
    Body: { debug: boolean; previews: boolean; dualCerts: boolean; autodeploy: boolean; branch: string; projectId: number; };
}
export interface DeleteApplication extends OnlyId {
    Querystring: { domain: string; };
}
export interface CheckDNS extends OnlyId {
    Querystring: { domain: string; };
    Body: {
        exposePort: number,
        fqdn: string,
        forceSave: boolean,
        dualCerts: boolean
    }
}
export interface DeployApplication {
    Querystring: { domain: string }
    Body: { pullmergeRequestId: string | null, branch: string }
}
export interface GetImages {
    Body: { buildPack: string, deploymentType: string }
}
export interface SaveApplicationSource extends OnlyId {
    Body: { gitSourceId: string }
}
export interface CheckRepository extends OnlyId {
    Querystring: { repository: string, branch: string }
}
export interface SaveDestination extends OnlyId {
    Body: { destinationId: string }
}
export interface SaveSecret extends OnlyId {
    Body: {
        name: string,
        value: string,
        isBuildSecret: boolean,
        isPRMRSecret: boolean,
        isNew: boolean
    }
}
export interface DeleteSecret extends OnlyId {
    Body: { name: string }
}
export interface SaveStorage extends OnlyId {
    Body: {
        path: string,
        newStorage: boolean,
        storageId: string
    }
}
export interface DeleteStorage extends OnlyId {
    Body: {
        path: string,
    }
}
export interface GetApplicationLogs extends OnlyId {
    Querystring: {
        since: number,
    }
}
export interface GetBuildLogs extends OnlyId {
    Querystring: {
        buildId: string
        skip: number,
    }
}
export interface GetBuildIdLogs {
    Params: {
        buildId: string
    },
    Querystring: {
        sequence: number
    }
}
export interface SaveDeployKey extends OnlyId {
    Body: {
        deployKeyId: number
    }
}
export interface CancelDeployment {
    Body: {
        buildId: string,
        applicationId: string
    }
}
export interface DeployApplication extends OnlyId {
    Body: {
        pullmergeRequestId: string | null,
        branch: string
    }
}
