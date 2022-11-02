import { setupInstall } from '@/utils/install'

import CrudModal from './CrudModal.vue'
import CrudTable from './CrudTable.vue'

setupInstall(CrudModal)
setupInstall(CrudTable)

export { CrudModal, CrudTable }
