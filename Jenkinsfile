pipeline {
    agent any

    tools {
        nodejs "nodejs"
    }

    stages {
        stage('Change directory') {
            steps {
                sh 'cd ./api'
            }
        }

        stage('Install Dependencies') {
            steps {
                sh 'npm install'
            }
        }

        stage('Run Tests') {
            steps {
                sh 'npm run test'
            }
        }

        stage('Build') {
            steps {
                sh 'npm run build'
            }
        }
    }
}
