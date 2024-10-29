declare global {
	namespace App {
		// interface Error {}
		interface Locals {}
		interface PageData {}
		
		interface UserFormData {
			firstName: string;
			lastName: string;
			email: string;
			password: string;
		}
		
		interface FormErrors {
			firstName?: string;
			lastName?: string;
			email?: string;
			password?: string;
		}
	}
}

export {};