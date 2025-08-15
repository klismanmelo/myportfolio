pipeline {
    agent any

    stages {
        stage('Clone') {
            steps {
                git branch: 'main', url: 'https://github.com/klismanmelo/myportfolio.git'
            }
        }

        stage('Build Docker Image') {
            steps {
                sh 'docker build -t myportfolio .'
            }
        }

        stage('Stop Old Container') {
            steps {
                sh '''
                docker ps -q --filter "name=myportfolio" | grep -q . && docker stop myportfolio && docker rm myportfolio || true
                '''
            }
        }

        stage('Run New Container') {
            steps {
                sh 'docker run -d --name myportfolio -p 3000:3000 --restart always myportfolio'
            }
        }
    }
}
