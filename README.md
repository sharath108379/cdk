# Welcome to CICD project

Following is the directory structure of the project -
* .github folder contains GitHub workflows
* cdk-aws folder contains cdk project for aws resources
* cdk-tf folder contains cdk project for databricks resources
* dag folder contains airflow related files
* cicd.png contains CICD workflow diagram

## github 
* workflows folder - A workflow is a configurable automated process that will run one or more jobs. Workflows are defined by a YAML file checked in to your repository and will run when triggered by an event in your repository, or they can be triggered manually, or at a defined schedule.
* CODEOWNERS file - You can use a CODEOWNERS file to define individuals or teams that are responsible for code in a repository.

## cdk-aws
* bin folder contains TypeScript code that you write for your CDKTF project.
* lib folder contains TypeScript code to define your AWS resources
* .gitignore, which is a list of files and directories that Git ignores if you want to push this project into a remote Git repository.
* cdk.json, which contains configuration settings for your CDK project. See Configuration File for more information on configuration settings.
* jest.config.js and test subdirectory, which manage supporting unit tests that you can write for your CDKTF project.
* .npmignore, package.json, package-lock.json,and tsconfig.json, which manage code dependencies and other settings for your CDK project.

## cdk-tf
* main.ts, which contains the TypeScript code that you write for your CDKTF project.
* cdktf.json, which contains configuration settings for your CDKTF project. See Configuration File for more information on configuration settings.
* jest.config.js and a \_\_tests\_\_ subdirectory, which manage supporting unit tests that you can write for your CDKTF project.
* .gitignore, which is a list of files and directories that Git ignores if you want to push this project into a remote Git repository.
* help, which contains information about some next steps you can take to work with your CDKTF project.
* .npmrc, package.json, package-lock.json, setup.js, and tsconfig.json, which manage code dependencies and other settings for your CDKTF project.

## Useful commands

* `npm run build`   compile typescript to js
* `npm run watch`   watch for changes and compile
* `npm run test`    perform the jest unit tests
* `cdk deploy`      deploy this stack to your default AWS account/region
* `cdk diff`        compare deployed stack with current state
* `cdk synth`       emits the synthesized CloudFormation template
