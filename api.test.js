test('test device array', () => {
    expect.assertions(1);
    return axios.get(`${API_URL}/devices`)
      .then(resp => resp.data)
      .then(resp => {
        expect(resp[0].user).toEqual('mary123');
      });
    });
  
  