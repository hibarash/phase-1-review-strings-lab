// Write your code in this file!
 const currentUser = 'Grace Hoper';
 console.log(currentUser);

 const welcomeMessage = `Welcome to Flatbook, ',  ${currentUser} !`;

 const excitedWelcomeMessage = `${welcomeMessage.toUpperCase()} + ", " ${currentUser}!`;

 //const shortGreeting = `"Welcome, "${currentUser.slice(0)}!`;
 //console.log(shortGreeting);
 const shortGreeting = `Welcome, ${currentUser.slice(0, 1)}!`
 /*
 describe('shortGreeting', () => {
    it(`contains "Welcome, "`, () => {
      expect(shortGreeting).to.have.string('Welcome, ');
    });

    it("contains the first initial of the name stored in the 'currentUser' variable", () => {
      const firstInitial = currentUser[0];
      const restOfName = currentUser.slice(1);

      expect(shortGreeting).to.have.string(firstInitial);
      expect(shortGreeting).to.not.have.string(restOfName);
    });

    it('ends with an exclamation point', () => {
      expect(shortGreeting.substr(-1)).to.eq('!');
 */