pipeline {
    agent any

    stages {
        stage ('Build image') {
            steps {
                script {
                    dockerapp = docker.build("node/servidor", "--file ./Dockerfile ./" ) 
                }
            }
        }
    }
}
