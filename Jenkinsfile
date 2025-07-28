pipeline {
  agent any
  tools {nodejs 'Node'}
  stages {
    stage('Build..') {
      steps {
        echo 'Add dependencies'
        sh "npm install"
      }
    }
    stage('Testing...') {
      steps {
        echo 'Run tests'
        sh "npm run cypress:jenkins"
      }
    }
    stage('End...') {
        steps {
            echo 'End'
        }
        }
    }
}