pipeline {
    agent any

    stages {
        stage ('Deploy application') {
            steps {
                sh 'docker-compose up -d --build'
            }
        }
    }
}
