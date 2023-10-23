export async function login(username, password) {
    const apiUrl = 'https://dummyjson.com/auth/login';

    try {
        const response = await fetch(apiUrl, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ username, password }),
            cache: 'no-store',
        });

        if (response.ok) {
            console.log('✅');
            return await response
        } else {
            console.log('❌');
        }
    } catch (error) {
       console.log(error)
    }
}