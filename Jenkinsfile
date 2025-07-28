pipeline {
  agent any
  tool {nodejs 'Node'}
  stages {
    stage('Build..') {
      steps {
        echo 'Add dependencies'
        sh "npm run cypress:run"
      }
    }
    stage('Testing...') {
      steps {
        echo 'Run tests'
        sh "npm run cypress:run"
      }
    }
    stage('End...') {
        steps {
            echo 'End'
        }
        }
    }
}