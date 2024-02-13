pipeline {
    agent any

    triggers {
        webhook('GitHub')
    }


    stages {
        stage ('Build image') {
            steps {
                script {
                    dockerapp = docker.build("node/servidor", "--file ./Dockerfile ./" ) 
                }
            }
        }

        stage ('Deploy app') {
            steps {
                sh 'docker rm -f node-server'

                sh 'docker run -d --name node-server -p 5321:3000 node/servidor'
            }
        }
    }
}
