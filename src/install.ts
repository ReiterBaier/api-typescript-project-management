import { Service, ServiceConfig } from 'node-windows'
import { EventLogger } from 'node-windows'

const serviceLog = new EventLogger()

const options: ServiceConfig = {
  name: 'FSIS-Suportfy',
  description: 'API para controle de projetos',
  script: './dist/src/index.js'
}


export const srv = () => {
  const srv = new Service(options)

  srv.on('install', () => {
    srv.start()
    console.log('Suportfy service installed!')
    serviceLog.info('Suportfy service installed!')
  })

  return srv
}

srv().install()
