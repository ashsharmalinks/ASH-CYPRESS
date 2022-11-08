

pipeline{
 agent any 
 
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
    any
    }
   }
   steps{
    script {
      // sh 'cypress install'
      // sh 'yarn install --production --check-files'
      // sh 'npx cypress run'
     bat 'npm cypress install'
     // git url 'https://github.com/ashsharmalinks/ASH-CYPRESS.git'
     // bat 'docker run -it --entrypoint=cypress/included:10.10.0 info'
     // bat 'docker build -t cypress .'
     bat'npm update'
     bat 'npm run triggerAllTestshealess'
    }
   }
  }
 }