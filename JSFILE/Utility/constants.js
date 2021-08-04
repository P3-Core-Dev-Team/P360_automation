"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Constants = void 0;
var Constants = /** @class */ (function () {
    function Constants() {
        this.URL = "http://52.66.147.204/auth/sign-in";
        this.sleep = 2000;
        this.deepsleep = 50000;
        this.CreateFileShareEntity = "File Share Entity Created Successfully.";
        this.LockEntity = "Entity lock is updated";
        this.CreateWorspace = "Workspace Created Successfully";
        this.Request = "Request has been processed";
        this.JobRun = "Job initiated successfully";
        this.FileshareOutputPath = "/home/ubuntu/FILE_SHARE";
        this.AddUserWS = "User Added";
        this.PromoteUser = "User Promoted";
        this.UpdateEntity = "Updated Successfully";
        this.DataSource = "Data source Created Successfully.";
        this.DS_connection = "Test connectivity Successfully tested";
        this.editEntityName = "Entity name edited";
    }
    Constants.URL = function (URL) {
        throw new Error("Method not implemented.");
    };
    return Constants;
}());
exports.Constants = Constants;
