// @Library('jenkins-peipeline-helpers@master')_

// properties([
//  buildDiscarder(
//   logRotator(artifactDaystoKeepStr: '10', artifactNumtoKeepStr: '10', daystoKeepStr:'', nuymtoKeepStr: '')

//  ),
//  disableConurrentBuilds()
// ])

// String cron_string == BRANCH_NAME == "master" ? "* * * * *":""

peipeline{
//  agent any
//  triggers {
//   cron(cron_string)
//  }
//  options {
//   timeout(time: 1, unit:'HOURS')
//  }
 stages {
  stage('execute test against the envronment') {
   agent {
    dockerfile {
     filename 'Dockerfile'
     echo 'install Docker file'
    }
   }
   steps{
    script {
     sh 'cypress install'
     sh 'yarn install --production --check-file'
     sh 'yarn run test-execution'
    }
   }
  }
 }
}