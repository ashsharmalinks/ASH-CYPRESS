// @Library('jenkins-peipeline-helpers@master')_

// properties([
//  buildDiscarder(
//   logRotator(artifactDaystoKeepStr: '10', artifactNumtoKeepStr: '10', daystoKeepStr:'', nuymtoKeepStr: '')

//  ),
//  disableConurrentBuilds()
// ])
// update
// String cron_string == BRANCH_NAME == "master" ? "* * * * *":""

pipeline{
 agent {
  any {
  filename 'Dockerfile'
 }
 }
 // tools {nodejs "node"}
//  triggers {
//   cron(cron_string)
//  }
 options {
  timeout(time: 1, unit:'HOURS')
  ansiColor('xterm')
 }
 stages {
  stage('execute test against the envronment') {
   agent {
    any {
     filename 'Dockerfile'
     echo 'install Docker file'
    }
   }
   steps{
    script {
     // bat 'npm cypress install'
     // git url 'https://github.com/ashsharmalinks/ASH-CYPRESS.git'
     // bat 'docker run -it --entrypoint=cypress/included:10.10.0 info'
     bat 'docker build -t cypress .'
     // bat'npm update'
     // bat 'npm run triggerAllTestshealess'
    }
   }
  }
 }
}