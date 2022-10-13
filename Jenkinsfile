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
                     sh '''
                        ssh -o StrictHostKeyChecking=no -l ubuntu 13.250.64.77 
                        touch 2.txt
                        touch 3.txt
                     '''
                }
            }
        }
    }
}