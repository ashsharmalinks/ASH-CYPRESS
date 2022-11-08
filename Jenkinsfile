pipeline{
 agent any
 
options {
  timeout(time: 1, unit:'HOURS')
  ansiColor('xterm')
 }
 stages {
        stage('Cypress Parallel Test Suite') {
            parallel {
                stage('Slave Node1') {
                    agent {
                        any
                    }
                    steps {
                        // git url: 'https://github.com/qauni/cypress-automation-framework.git'
                        bat 'npm install'
                        bat 'npm update'
                        bat 'npm run triggerAllTestshealess'
                    }
                }
            }
        }
    }
}