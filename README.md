# gqa-gdl-validation

Library for the Validation helper.

`gqa-gdl-validation` includes the following components:
* `gqa-gdl-validation`

## Creating additional components

To create additional components within an existing repository...

1. Create directory for `<new-component>` in `gqa-gdl-validation`: `mkdir <new-component>`
1. Create and configure an `.omd/<new-component>/now.yaml` file
1. Create a `<new-component>/sonar-project.properties` file configuring the [SonarCloud project](https://docs.sonarcloud.io/advanced-setup/ci-based-analysis/sonarscanner-cli/)
1. Create a `<new-component>/Makefile` with standard built targets (details TBD; stay tuned!)
