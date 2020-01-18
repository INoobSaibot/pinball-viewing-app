export interface PinballMachine {
    title: string
    manufacturer?: string
    dateOfManufacturer?: Date
    modelNumber?: string
    mpu?: string
    type?: string
    theme?: string
    specialty?: string[]
    notableFeatures?: string[]
    designBy?:string[]
    artBy?: string[]
    notes?: string
    roms?: Rom[]
    images?: string[]
}

interface Rom {
    name?: string
    link?: string
}

interface PhotoRecord {
    linkDisplayName?: string
    uri?: string
    notes?: string
}

export interface PinballMachineRecord {
    pinballMachine: PinballMachine
    ipdbNumber: string
    averageFunRating?: string
    serialNumberDatabase?: string
    photosIn?: PhotoRecord[]
    uri?: string
}
