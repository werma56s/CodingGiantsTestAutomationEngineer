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
        echo 'Run tests with tags'
        //bat "npm run cypress:jenkins" 
        //bat 'npx cypress run --browser chrome --headless --env TAGS="@smoke_tests"'
        bat "npm run cypress:jenkins-tags-windows" 
      }
    }
    //testing parallel
      stage('Parallel Stage Example') {
            parallel {
                stage('Running TAG=incorrect_fields Tests...') {
                    steps {
                        bat 'npm run cypress:jenkins-tags-windows_incorrect_fields'
                    }
                }
                stage('Running TAG=required_fields Tests...') {
                    steps {
                        bat 'npm run cypress:jenkins-tags-windows_required_fields'
                    }
                }
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