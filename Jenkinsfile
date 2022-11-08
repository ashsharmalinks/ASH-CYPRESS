// @Library('jenkins-peipeline-helpers@master')_

// properties([
//  buildDiscarder(
//   logRotator(artifactDaystoKeepStr: '10', artifactNumtoKeepStr: '10', daystoKeepStr:'', nuymtoKeepStr: '')

//  ),
//  disableConurrentBuilds()
// ])

// String cron_string == BRANCH_NAME == "master" ? "* * * * *":""

pipeline{
 agent any
 // tools {nodejs "node"}
//  triggers {
//   cron(cron_string)
//  }
 options {
  timeout(time: 1, unit:'HOURS')
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
     bat 'npm install'
     bat'npm update'
     bat 'npm run triggerAllTestshealess'
    }
   }
  }
 }
}