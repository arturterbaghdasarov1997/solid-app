export interface IUserService {
    fetchUsers(): Promise<any>;
}

export class UserService implements IUserService {
    async fetchUsers(): Promise<any> {
        try {
            const res = await fetch('https://jsonplaceholder.typicode.com/users');
            if (!res.ok) {
                throw new Error("Failed to fetch users");
            }
            return res.json();
        } catch (error) {
            console.error("Error fetching users:", error);
            throw error;
        }
    }
}