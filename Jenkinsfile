pipeline{
    agent any
    stages{
        stage('Clone'){
            steps{
                git 'https://github.com/DangTrung24hdev/hello-nodejs.git'
            }
        }
        stage('ssh'){
            steps{
                sshagent(['ssh-remote']) {
                    sh 'ssh -o StrictHostKeyChecking=no -l ubuntu 13.250.64.77 touch text.txt'
                    sh 'touch text2.text'
                }
            }
        }
    }
}