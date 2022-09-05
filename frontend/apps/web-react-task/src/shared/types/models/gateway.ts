  export  interface GATEWAY{
    name?: string;
    IPv4address?: string;
    id?: string;
    createdAt?: number;
    updatedAt?: number;
    peripheralDevices?: {
        id: string;
        createdAt: number;
        updatedAt: number;
        UID: string;
        vendor: string;
        status: string;
        gateway: string;
    }[];

}
