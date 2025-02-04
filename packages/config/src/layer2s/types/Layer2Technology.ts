import { ProjectTechnologyChoice } from '../../common/ProjectTechnologyChoice'

export interface Layer2Technology {
  /** Technology provider */
  provider?: 'StarkEx' | 'Optimism' | 'zkSync'
  /** Name of the category the layer2 belongs to */
  category: Layer2Category
  /** What state correctness mechanism is used in the layer2 */
  stateCorrectness: ProjectTechnologyChoice
  /** What is the new cryptography used in the layer2 */
  newCryptography?: ProjectTechnologyChoice
  /** What is the data availability choice for the layer2 */
  dataAvailability: ProjectTechnologyChoice
  /** What are the details about layer2 operator(s) */
  operator: ProjectTechnologyChoice
  /** What are the details about force transactions (censorship resistance) */
  forceTransactions: ProjectTechnologyChoice
  /** A description of the available exit mechanisms */
  exitMechanisms: ProjectTechnologyChoice[]
  /** What is solution to the mass exit problem */
  massExit?: ProjectTechnologyChoice
  /** What is the additional privacy offered */
  additionalPrivacy?: ProjectTechnologyChoice
  /** What are the smart contract capabilities */
  smartContracts?: ProjectTechnologyChoice
  /** How can the Layer2 be upgraded? */
  upgradeMechanism?: ProjectTechnologyChoice
}

export type Layer2Category =
  | 'Optimistic Rollup'
  | 'Optimistic Chain'
  | 'Plasma'
  | 'State Pools'
  | 'Validium'
  | 'ZK Rollup'
