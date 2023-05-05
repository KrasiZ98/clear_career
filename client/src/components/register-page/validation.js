export default function validation(value) {

    const errors = {};

    if (value.email === '') {
        errors.email = 'Email is required';
    } if (value.email.length < 8) {
        errors.email = 'Email must be more than  8 char';
    }

    if (value.password === '') {
        errors.password = 'Password is required';
    } else if (value.password.length < 4) {
        errors.password = 'Password must be more than  4 char';
    }

    if (value.repass === '') {
        errors.repass = 'Password is required';
    } else if (value.password !== value.repass) {
        errors.repass = 'Password dont match'
    }


    return errors;
} 