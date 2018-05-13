const menuApi = {
    getWeeklyMenus() {
        // TODO: hardcoded
        return Promise.resolve({
            monday: '치킨양파덮밥',
            tuesday: '',
            wednesday: '',
            thursday: '',
            friday: ',',
            saturday: '',
            sunday: ''
        });
    }
};

export default menuApi;