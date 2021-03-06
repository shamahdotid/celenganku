import express from 'express'
import bodyParser from 'body-parser'
import SiswaController from '../controllers/siswa-controller'
import AuthController from '../controllers/auth-controller'

const siswaRoutes = express.Router()

siswaRoutes.use(bodyParser.json())

siswaRoutes.post('/register', SiswaController.createAkunSiswa)
siswaRoutes.post('/login', AuthController.login)

siswaRoutes.use(AuthController.requireAuth)

siswaRoutes.route('/')
  .get(SiswaController.getAllAkunSiswa)

siswaRoutes.route('/data')
  .get(SiswaController.getAllSiswaData)
  .post(SiswaController.createDataSiswa)

siswaRoutes.route('/data/import')
  .post(SiswaController.createMultipleDataSiswa)

siswaRoutes.route('/profil')
  .get(SiswaController.getAllProfilSiswa)

siswaRoutes.route('/:id')
  .get(SiswaController.getAkunSiswa)
  .patch(SiswaController.updateAkunSiswa)
  .delete(SiswaController.deleteAkunSiswa)

siswaRoutes.route('/:id/profil')
  .get(SiswaController.getProfilSiswa)

siswaRoutes.route('/:id/data')
  .get(SiswaController.getDataSiswa)
  .patch(SiswaController.updateDataSiswa)
  .delete(SiswaController.deleteDataSiswa)

siswaRoutes.route('/:id/saldo')
  .patch(SiswaController.updateSaldoSiswa)

export default siswaRoutes
