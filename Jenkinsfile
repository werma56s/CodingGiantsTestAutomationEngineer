pipeline {
  agent any
  tools {nodejs 'Node'}
  stages {
    stage('Build..') {
      steps {
        echo 'Add dependencies'
        bat "npm install"
      }
    }
    stage('Testing...') {
      steps {
        echo 'Run tests'
        bat "npm run cypress:jenkins"
      }
    }
    stage('End...') {
        steps {
            echo 'End'
        }
        }
    }
}