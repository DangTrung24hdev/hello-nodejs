pipeline{
    agent any
    stages{
        stage('Clone'){
            steps{
                git 'https://github.com/DangTrung24hdev/hello-nodejs.git'
            }
        }
         stage('Build') { 
            steps {
                sh 'npm start' 
            }
        }
    }
}