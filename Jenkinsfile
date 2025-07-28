pipeline {
  agent any
  tools {nodejs 'Node'}
  stages {
    stage('Build..') {
      steps {
        echo 'Add dependencies'
        sh "npm install"
        sh "apt-get install libgtk2.0-0 libgtk-3-0 libgbm-dev libnotify-dev libgconf-2-4 libnss3 libxss1 libasound2 libxtst6 xauth xvfb"
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