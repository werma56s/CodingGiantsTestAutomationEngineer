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
        bat "npm run cypress:jenkins_tags"
      }
    }
  }

  post{
      always{
       // publishHTML([allowMissing: false, alwaysLinkToLastBuild: false, icon: '', keepAll: true, reportDir: 'cucumber_report/HTMLReports', reportFiles: 'index.html', reportName: 'HTML Report', reportTitles: '', useWrapperFileDirectly: true])
        echo 'Run generating report per browser'
        bat "npm run generate-report-per-browser"
    }
  }
}