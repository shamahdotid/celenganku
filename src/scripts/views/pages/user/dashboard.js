/* eslint-disable no-undef */
/* eslint-disable max-len */
/* eslint-disable no-restricted-syntax */
import sortBy from 'lodash/sortBy'
import Swal from 'sweetalert2'
import StringFormater from '../../../helper/string-formater'
import DateFormater from '../../../helper/date-formater'
import APIData from '../../../data/api-data'
import ModalInitializer from '../../../utils/modal-initializer'
import EventHelper from '../../../helper/event-helper'

const Dashboard = {
  async render() {
    return /* html */ `
    <div class="p-4 pt-0 md:p-8 md:pt=8 lg:p-12 lg:pt-12 h-full">
      <div class="flex flex-col h-full mb-20 md:mb-0 md:max-w-screen-md lg:max-w-screen-xl mx-auto">
        <div class="text-center">
          <p class="text-xl leading-8 font-bold tracking-tight text-gray-800 md:text-2xl md:mt-2">
            Celenganku
          </p>
        </div>

        <div class="flex flex-col">
          <div class="bg-gray-200 gap-4 p-5 rounded-lg flex flex-wrap flex-col mt-4 md:p-8 md:gap-8 md:mt-6 md:flex-row">
            <div class="flex-grow-1 flex-auto lg:flex-1 p-5 bg-primary rounded-lg shadow-primary">
              <div class="flex items-center">

                <div class="preloader p-4 flex mt-auto mb-auto ml-auto mr-auto">
                  <div class="loader loader-mini ease-linear rounded-full border-8 border-t-8 border-gray-200"></div>
                </div>

                <div id="balance-card" class="hidden text-white flex flex-col flex-1">
                  <p class="-mb-2">Saldo</p>
                  <p id="bal" class="text-4xl md:text-2xl lg:text-4xl font-bold">Rp</p>
                  <div class="flex flex-row gap-2 mt-4">
                    <a href="#/transaction" class="w-10 h-10 p-1 bg-primaryLight text-primary font-light rounded-lg">
                      <svg fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                          d="M12 6v6m0 0v6m0-6h6m-6 0H6"></path>
                      </svg>
                    </a>
                    <a href="#/report" class="w-10 h-10 p-1 bg-primaryLight text-primary font-light rounded-lg">
                      <svg fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                          d="M9 17v-2m3 2v-4m3 4v-6m2 10H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z">
                        </path>
                      </svg>
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div class="flex-grow-1 flex-auto lg:flex-1 p-5 bg-white rounded-lg shadow-lg">
              <div class="flex items-center">

                <div class="preloader p-4 flex mt-auto mb-auto ml-auto mr-auto">
                  <div class="loader loader-mini ease-linear rounded-full border-8 border-t-8 border-gray-200"></div>
                </div>

                <div id="deposit-card" class="hidden flex flex-col flex-1">
                  <p class="-mb-2 text-gray-700">Pemasukan Bulan ini</p>
                  <p id="monthly-deposit" class="text-gray-800 text-4xl md:text-2xl lg:text-4xl font-bold"></p>
                  <p id="weekly-deposit" class="font-bold text-sm text-gray-400 mt-3" href=""></p>
                </div>
              </div>
            </div>
            <div class="flex-grow-1 flex-auto lg:flex-1 p-5 bg-white rounded-lg shadow-lg">
              <div class="flex items-center">

                <div class="preloader p-4 flex mt-auto mb-auto ml-auto mr-auto">
                  <div class="loader loader-mini ease-linear rounded-full border-8 border-t-8 border-gray-200"></div>
                </div>

                <div id="withdraw-card" class="hidden flex flex-col flex-1">
                  <p class="-mb-2 text-gray-700">Penarikan Bulan ini</p>
                  <p id="monthly-withdraw" class="text-gray-800 text-4xl md:text-2xl lg:text-4xl font-bold"></p>
                  <p id="weekly-withdraw" class="font-bold text-sm text-gray-400 mt-3" href=""></p>
                </div>
              </div>
            </div>
          </div>
          <p class="mt-6 text-xl text-center md:text-left">Riwayat Transaksi</p>
          <div class="bg-gray-200 p-5 rounded-lg flex flex-col mt-6 md:p-8">
            <div class="flex-1 py-0 white rounded-lg">
              <table id="transaction-table" class="table-auto w-full">
                <tbody>
                  <tr class="text-left text-gray-700">
                    <th class="font-normal p-5 pr-0 pt-0">Tanggal</th>
                    <th class="font-normal pb-5 pt-0 hidden lg:table-cell">Kode Transaksi</th>
                    <th class="font-normal pb-5 pt-0">Nominal</th>
                    <th class="font-normal pb-5 pt-0 hidden lg:table-cell">Metode</th>
                    <th class="font-normal pb-5 pt-0 hidden lg:table-cell">Jenis</th>
                    <th class="font-normal pb-5 pt-0">Status</th>
                    <th class="font-normal pb-5 pt-0 justify-end"></th>
                  </tr>
                </tbody>
              </table>
              <div class="preloader p-4 flex mt-auto mb-auto mx-auto justify-center">
                <div class="loader loader-mini ease-linear rounded-full border-8 border-t-8 border-gray-200"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
      `
  },

  async afterRender() {
    // Remove Preloders
    const preloaders = document.querySelectorAll('.preloader')
    const balanceCard = document.getElementById('balance-card')
    const depositCard = document.getElementById('deposit-card')
    const withdrawCard = document.getElementById('withdraw-card')

    this._ballance = 0
    this._deposit = 0
    this._weeklyDeposit = 0
    this._withdraw = 0
    this._weeklyWithdraw = 0

    // Fetch Data
    const responseData = await APIData.retrieveUser()
    this._userId = responseData.id
    const accountData = await APIData.getAkunSiswa(this._userId)
    this._ballance = accountData.saldo

    const balanceText = document.getElementById('bal')
    const withdrawText = document.getElementById('monthly-withdraw')
    const weekWithdrawText = document.getElementById('weekly-withdraw')
    const depositText = document.getElementById('monthly-deposit')
    const weekDepositText = document.getElementById('weekly-deposit')
    balanceText.innerHTML = `Rp ${StringFormater.convertToCashFormat(this._ballance)}`

    await this._renderTable()
    // Render Cards
    withdrawText.innerHTML = `Rp ${StringFormater.convertToCashFormat(this._withdraw)}`
    weekWithdrawText.innerHTML = `RP ${StringFormater.convertToCashFormat(this._weeklyWithdraw)} MINGGU INI`
    depositText.innerHTML = `Rp ${StringFormater.convertToCashFormat(this._deposit)}`
    weekDepositText.innerHTML = `RP ${StringFormater.convertToCashFormat(this._weeklyDeposit)} MINGGU INI`

    // Remove Preloaders
    balanceCard.classList.remove('hidden')
    depositCard.classList.remove('hidden')
    withdrawCard.classList.remove('hidden')
    preloaders.forEach((preloader) => {
      preloader.remove()
    })
  },

  async _renderTable() {
    const tableElement = document.getElementById('transaction-table')
    const tableBody = tableElement.querySelector('tbody')
    const unsortedTransactionData = await APIData.getTransaksiSiswa(this._userId)
    const transactionData = sortBy(unsortedTransactionData.data, ['tenggat_waktu_pembayaran.seconds']).reverse()

    const transactionTemplate = (transaction) => {
      Object.keys(transaction).forEach((key) => {
        if (typeof transaction[key] === 'object') {
          //
        } else if (key === 'nominal') {
          transaction[key] = StringFormater.convertToCashFormat(transaction[key])
        } else {
          transaction[key] = transaction[key].toString().toUpperCase()
        }
      })

      const timeStamp = new Date(transaction.tenggat_waktu_pembayaran.seconds * 1000)
      const jenisTransaksi = transaction.jenis_transaksi
      const timeLeft = new Date()
      timeLeft.setDate(timeStamp.getDate())
      timeStamp.setDate(timeStamp.getDate() - 1)
      const transactionDate = timeStamp.toLocaleDateString('id-ID', { year: 'numeric', month: 'long', day: 'numeric' })
      const transactionDateMini = timeStamp.toLocaleDateString('id-ID')

      if (transaction.status_transaksi.toLowerCase() === 'selesai') {
        if (timeStamp.getMonth() === new Date().getMonth()) {
          if (jenisTransaksi.toLowerCase() === 'pemasukan') {
            this._deposit += StringFormater.convertCasttoInt(transaction.nominal)
            if (DateFormater.isDateInThisWeek(timeStamp)) {
              this._weeklydeposit += StringFormater.convertCasttoInt(transaction.nominal)
            }
          } else {
            this._withdraw += StringFormater.convertCasttoInt(transaction.nominal)
            if (DateFormater.isDateInThisWeek(timeStamp)) {
              this._weeklyWithdraw += StringFormater.convertCasttoInt(transaction.nominal)
            }
          }
        }
      }

      // Classes
      const nominalColor = (jenis) => {
        if (jenis.toLowerCase() === 'pemasukan') return 'text-success'
        return 'text-failed'
      }

      const statusColor = (status) => {
        if (status.toLowerCase() === 'selesai') return 'bg-primary text-white'
        return 'bg-primaryDisable text-primary'
      }

      const renderStatusIcon = (status) => {
        if (status.toLowerCase() === 'selesai') return 'M5 13l4 4L19 7'
        return 'M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z'
      }

      const getStatusAction = (status) => {
        if (status.toLowerCase() === 'selesai') {
          return `
          <button id="show-transaction-button-${transaction.id_transaksi}"
            class="flex w-full flex-1 px-4 py-3 text-sm font-normal text-gray-700 hover:bg-gray-100 hover:text-gray-900"
            role="menuitem">
            <i class="text-primary flex">
            <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"></path><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"></path></svg>
            </i>
            <p class="flex ml-2 leading-relaxed">Lihat Transaksi</p>
          </button>`
        }
        return `
        <button id="show-transaction-button-${transaction.id_transaksi}"
            class="flex w-full flex-1 px-4 py-3 text-sm font-normal text-gray-700 hover:bg-gray-100 hover:text-gray-900"
            role="menuitem">
            <i class="text-primary flex">
            <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 7H5a2 2 0 00-2 2v9a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-3m-1 4l-3 3m0 0l-3-3m3 3V4"></path></svg>
            </i>
            <p class="flex ml-2 leading-relaxed">Bayar Transaksi</p>
          </button>
          <button id="cancel-transaction-button-${transaction.id_transaksi}"
            class="flex w-full flex-1 px-4 py-3 text-sm font-normal text-gray-700 hover:bg-gray-100 hover:text-gray-900"
            role="menuitem">
            <i class="text-primary flex"><svg class="w-6 h-6" fill="none" stroke="currentColor"
                viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                  d="M6 18L18 6M6 6l12 12"></path>
              </svg></i>
            <p class="flex ml-2 leading-relaxed">Batalkan Transaksi</p>
          </button>`
      }

      const _cancelButtonInit = (cancelButton) => {
        cancelButton.addEventListener('click', async (event) => {
          event.stopPropagation()
          const result = await Swal.fire({
            icon: 'warning',
            text: 'Tekan pilihan untuk mengkonfirmasi',
            title: 'Batalkan transaksi?',
            showCancelButton: true,
            confirmButtonText: 'Batalkan',
            cancelButtonText: 'Jangan',
            showLoaderOnConfirm: true,
            preConfirm: async () => {
              try {
                await APIData.deleteTransaksiSiswa(transaction.id_transaksi)
              } catch (error) {
                Swal.showValidationMessage(
                  `Request failed: ${error}`,
                )
              }
            },
            customClass: {
              popup: 'popup-sweetalert',
              confirmButton: 'btn-sweetalert bg-success',
              cancelButton: 'btn-sweetalert bg-failed',
            },
            buttonsStyling: false,
          })

          if (result.isConfirmed) {
            this._renderTable()
          }
        })
        return true
      }

      const _showTransactionModalInit = async (showButton) => {
        const dataSiswa = await APIData.getDataSiswa(transaction.nisn)
        showButton.addEventListener('click', () => {
          if (transaction.metode_pembayaran.toLowerCase() === 'daring' && transaction.status_transaksi.toLowerCase() === 'pembayaran') {
            snap.pay(transaction.token.toLowerCase(), {
              onSuccess: (result) => {
              },
              onPending(response) {
                console.log(response)
                /* You may add your own implementation here */
                window.location.href = response.finish_redirect_url
              },
            })
            return true
          }

          ModalInitializer.init({
            title: 'Transaksi',
            content:
            `<div class="px-10 py-6">
              <div id="modal-content">
                <p class="mt-2 mb-1">Kode Transaksi</p>
                <div class="flex flex-row">
                  <p id="id-transaksi" class="my-2 text-3xl select-all font-bold">${transaction.id_transaksi}</p>
                  <button role="button" id="copy-button" class="w-max text-primary ml-2 font-light p-2">
                  <svg class="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 5H6a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2v-1M8 5a2 2 0 002 2h2a2 2 0 002-2M8 5a2 2 0 012-2h2a2 2 0 012 2m0 0h2a2 2 0 012 2v3m2 4H10m0 0l3-3m-3 3l3 3"></path></svg>
                  </button>
                </div>
                <p class="mb-2 text-gray-800">Nama Siswa</p>
                <input name="Nama" disabled value="${dataSiswa.nama} (${transaction.nisn})"
                  class="mb-2 block px-5 py-3 rounded-lg w-full bg-gray-200 text-gray-500">
                  <p class="mb-2 text-gray-800">Nominal</p>
                <input name="Nominal" disabled value="${transaction.nominal}"
                  class="mb-2 block px-5 py-3 rounded-lg w-full bg-gray-200 text-gray-500">
                <div class="flex flex-col md:flex-row md:gap-4">
                  <div class="flex flex-1 flex-col">
                  <p class="mb-2 text-gray-800">Jenis Transaksi</p>
                  <input name="Jenis Transaksi" disabled value="${transaction.jenis_transaksi}"
                    class="mb-2 block px-5 py-3 rounded-lg w-full bg-gray-200 text-gray-500">
                  </div>
                  <div class="flex flex-1 flex-col">
                  <p class="mb-2 text-gray-800">Metode Pembayaran</p>
                    <input name="Metode Pembayaran" disabled value="${transaction.metode_pembayaran}"
                      class="mb-2 block px-5 py-3 rounded-lg w-full bg-gray-200 text-gray-500">
                  </div>
                </div>
              </div>
              <div class="flex justify-end items-center w-100 mt-4">
                <button role="button" id="show-qr-button" class="w-max text-primary mx-1 font-light p-2">
                <svg class="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 4v1m6 11h2m-6 0h-2v4m0-11v3m0 0h.01M12 12h4.01M16 20h4M4 12h4m12 0h.01M5 8h2a1 1 0 001-1V5a1 1 0 00-1-1H5a1 1 0 00-1 1v2a1 1 0 001 1zm12 0h2a1 1 0 001-1V5a1 1 0 00-1-1h-2a1 1 0 00-1 1v2a1 1 0 001 1zM5 20h2a1 1 0 001-1v-2a1 1 0 00-1-1H5a1 1 0 00-1 1v2a1 1 0 001 1z"></path></svg></button>
                <button role="button" id="close-button" class="w-max bg-primary text-white mx-1 py-3 px-8 rounded-lg disabled:opacity-50">Tutup</button>
              </div>
            </div>`,
          })
          const modal = document.getElementById('modal-transaksi')
          const modalContent = document.getElementById('modal-content')
          const thisContent = modalContent.innerHTML
          const qrContent = `<img class="mx-auto" src="https://api.qrserver.com/v1/create-qr-code/?size=200x200&data=${transaction.id_transaksi}"></img>`
          const showQRButton = document.getElementById('show-qr-button')
          const closeButton = document.getElementById('close-button')
          const copyButton = document.getElementById('copy-button')
          const copyText = document.getElementById('id-transaksi')
          copyButton.addEventListener('click', () => {
            EventHelper.copyTextToClipboard(transaction.id_transaksi)
            copyText.focus()
          })
          showQRButton.addEventListener('click', (event) => {
            event.stopPropagation()
            if (modalContent.innerHTML === thisContent) modalContent.innerHTML = qrContent
            else modalContent.innerHTML = thisContent
          })
          closeButton.addEventListener('click', () => {
            modal.remove()
          })
        })
        return true
      }

      if (transaction.status_transaksi.toLowerCase() === 'pembayaran') {
        let delayTime = 1000
        setInterval(async () => {
          try {
            const {
              distance, hours, minutes,
            } = DateFormater.getTimeCounter(timeLeft)
            const counterText = `${hours} jam ${minutes} menit`
            const counterReminder = `Transaksi ini akan automatis dibatalkan dalam <br><b class="flex mt-3 text-primary">${counterText}</b>`
            const reminderElement = document.getElementById(`reminder-element-${transaction.id_transaksi}`)
            reminderElement.className = 'p-5 text-sm font-normal text-gray-600'
            reminderElement.innerHTML = counterReminder

            if (distance < 0) {
              await APIData.deleteTransaksiSiswa(transaction.id_transaksi)
              this._renderTable()
            }

            // if (distance < 0) console.log('telat bang')
            let initialized = false
            while (!initialized) {
              const cancelButton = document.getElementById(`cancel-transaction-button-${transaction.id_transaksi}`)
              initialized = _cancelButtonInit(cancelButton)
              delayTime = 60000
            }
          } catch (error) {
            // console.log('')
          }
        }, delayTime)
      }

      let initialized = false
      setInterval(async () => {
        try {
          while (!initialized) {
            const showButton = document.getElementById(`show-transaction-button-${transaction.id_transaksi}`)
            // eslint-disable-next-line no-await-in-loop
            initialized = await _showTransactionModalInit(showButton)
          }
        } catch (error) {
          // console.log('')
        }
      }, 1000)

      return /* html */`<tr class="font-bold text-gray-800 mb-5 hover:shadow-lg">
      <td class="hidden md:table-cell p-5 pr-0 text-gray-500 bg-white rounded-l-lg">${transactionDate.toUpperCase()}</td>
      <td class="table-cell md:hidden p-5 pr-0 text-gray-500 bg-white rounded-l-lg">${transactionDateMini.toUpperCase()}</td>
      <td class="bg-white select-all hidden lg:table-cell">${transaction.id_transaksi}</td>
      <td class="bg-white ${nominalColor(jenisTransaksi)}">RP ${transaction.nominal}</td>
      <td class="bg-white hidden lg:table-cell">${transaction.metode_pembayaran}</td>
      <td class="bg-white hidden lg:table-cell">${jenisTransaksi}</td>
      <td class="bg-white">
        <div class="ml-2 md:ml-0 text-sm ${statusColor(transaction.status_transaksi)} p-1 md:py-2 md:px-6 rounded-lg w-max">
        <p class="hidden md:inline">${transaction.status_transaksi}</p>
        <p class="inline md:hidden"><svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="${renderStatusIcon(transaction.status_transaksi)}"></path></svg></p>
        </div>
      </td>
      <td class="bg-white rounded-r-lg justify-end flex p-3 pl-0">
        <button class="w-8 md:p-2 md:w-12 h-12 text-gray-700" id="settings">
          <svg fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
              d="M5 12h.01M12 12h.01M19 12h.01M6 12a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0z">
            </path>
          </svg>
        </button>
        <div id="settings-dropdown"
          class="hidden absolute mt-10 w-56 rounded-lg shadow-lg bg-white ring-1 ring-black ring-opacity-5">
          <div class="py-1" role="menu" aria-orientation="vertical" aria-labelledby="options-menu">
          <p id="reminder-element-${transaction.id_transaksi}"></p>
            ${getStatusAction(transaction.status_transaksi)}
          </div>
        </div>
      </td>
    </tr>
    <tr class="h-4"></tr>`
    }

    tableBody.innerHTML = `
      <tr class="text-left text-gray-700">
        <th class="font-normal p-5 pr-0 pt-0">Tanggal</th>
        <th class="font-normal pb-5 pt-0 hidden lg:table-cell">Kode Transaksi</th>
        <th class="font-normal pb-5 pt-0">Nominal</th>
        <th class="font-normal pb-5 pt-0 hidden lg:table-cell">Metode</th>
        <th class="font-normal pb-5 pt-0 hidden lg:table-cell">Jenis</th>
        <th class="font-normal pb-5 pt-0">Status</th>
        <th class="font-normal pb-5 pt-0 justify-end"></th>
      </tr>`
    transactionData.forEach((transaction) => {
      tableBody.innerHTML += transactionTemplate(transaction)
    })
  },
}

export default Dashboard
