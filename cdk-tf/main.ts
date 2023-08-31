import { Construct } from "constructs";
import { App, TerraformOutput, TerraformStack, TerraformVariable } from "cdktf";
import { DatabricksProvider } from '@cdktf/provider-databricks/lib/provider';
import { DataDatabricksCurrentUser } from '@cdktf/provider-databricks/lib/data-databricks-current-user';
import { Notebook } from '@cdktf/provider-databricks/lib/notebook';
import { Job } from '@cdktf/provider-databricks/lib/job';
import * as vars from "./vars";


class MyStack extends TerraformStack {
  constructor(scope: Construct, name: string) {
    super(scope, name);

    const host = new TerraformVariable(this, "host", {
      type: "string",
      description: "Databricks Host",
    });

    const token = new TerraformVariable(this, "token", {
      type: "string",
      description: "Databricks Token",
    });

    new DatabricksProvider(this, "databricksAuth", {
      host: host.value,
      token: token.value
    })
	
	const currentUser = new DataDatabricksCurrentUser(this, "currentUser", {});

    // Define the notebook.
    const notebook = new Notebook(this, "notebook", {
      path: `${currentUser.home}/CDKTF/${vars.resourcePrefix}-notebook.py`,
      language: "PYTHON",
      contentBase64: Buffer.from("display(spark.range(20))", "utf8").toString("base64")
    });

    // // Define the job to run the notebook.
    // const job = new Job(this, "job", {
    //   name: `${vars.resourcePrefix}-job`,
    //   newCluster: {
    //     numWorkers: vars.numWorkers,
    //     sparkVersion: vars.sparkVersion,
    //     nodeTypeId: vars.nodeTypeId
    //   },
    //   notebookTask: {
    //     notebookPath: `${currentUser.home}/CDKTF/${vars.resourcePrefix}-notebook.py`
    //   },
    //   emailNotifications: {
    //     onSuccess: [ currentUser.userName ],
    //     onFailure: [ currentUser.userName ]
    //   }
    // });

    // Output the notebook and job URLs.
    new TerraformOutput(this, "Notebook URL", {
      value: notebook.url
    });

    // new TerraformOutput(this, "Job URL", {
    //   value: job.url
    // });
  }
}

const app = new App();
new MyStack(app, "cdktf-demo");
app.synth();