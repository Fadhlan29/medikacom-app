import { Sequelize } from 'sequelize'

const db = new Sequelize("medikacom", "root", "", {
  host: "localhost",
  dialect: "mysql"
})

export default db