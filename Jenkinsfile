pipeline {
    agent any

    tools {
        nodejs "node"
    }

    stages {
        stage('Change directory') {
            steps {
                sh 'cd /api'
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
