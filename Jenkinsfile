pipeline {
    agent any

    tools {
        nodejs "nodejs"
    }

    stages {
        stage('Install Dependencies') {
            steps {
                dir('api') {
                    sh 'npm install'
                }
            }
        }

        stage('Run Tests') {
            steps {
                dir('api') {
                    sh 'npm run test'
                }
            }
        }

        stage('Build') {
            steps {
                dir('api') {
                    sh 'npm run build'
                }
            }
        }
    }
}
