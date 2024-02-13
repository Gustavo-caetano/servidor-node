pipeline {
    agent any

    stages {
        stage ('list files') {
            steps {
                sh 'ls -l'
            }
        }

        stage ('Build image') {
            steps {
                script {
                    dockerapp = docker.build("node/servidor", "--file ./Dockerfile ./src" ) 
                }
            }
        }
    }
}
