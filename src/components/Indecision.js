import React from 'react';
import AddOptions from './AddOptions'
import Options from './Options'
import Header from './Header'
import Action from './Action'

class Indecision extends React.Component {
    constructor(props) {
        super(props);
        this.handleDeleteOptions = this.handleDeleteOptions.bind(this);
        this.handlePick = this.handlePick.bind(this);
        this.handleAddOption = this.handleAddOption.bind(this);
        this.handleDeleteOption = this.handleDeleteOption.bind(this);
        this.state = {
            options: []
        }
    }

    componentDidMount() {
        try {
            const json = localStorage.getItem('options');
            const options = JSON.parse(json)

            if (options) {
                this.setState(() => ({ options }))
            }
        } catch (e) {
            console.log(e)
        }




        console.log('Component did mount')
    }

    componentDidUpdate(prevProps, prevState) {
        if (prevState.options.length !== this.state.options.length) {
            const json = JSON.stringify(this.state.options);
            localStorage.setItem('options', json)
        }
    }

    componentWillUnmount() {
        console.log('component will unmount')
    }

    handleDeleteOptions() {
        this.setState(() => ({ options: [] }));
    }

    handleDeleteOption(optionToRemove) {
        this.setState((prevState) => ({
            options: prevState.options.filter((option) => {
                return optionToRemove !== option
            })
        }))
    }

    handlePick() {
        const random = Math.floor(Math.random() * this.state.options.length);
        const option = this.state.options[random];
        alert(option)
    }


    handleAddOption(option) {
        if (!option) {
            return 'Enter valid value to add option';
        } else if (this.state.options.indexOf(option) > -1) {
            return 'This option already exist'
        }

        this.setState((prevState) => ({
            options: prevState.options.concat([option])
        }))
    }

    render() {
        const subtitle = "Put your life in the hands of a computer"

        return (
            <div>
                <Header subtitle={subtitle} />
                <Action
                    hasOptions={this.state.options.length > 0}
                    handlePick={this.handlePick} />
                <Options
                    handleDeleteOption={this.handleDeleteOption}
                    options={this.state.options}
                    handleDeleteOptions={this.handleDeleteOptions} />
                <AddOptions
                    handleAddOption={this.handleAddOption} />
            </div>
        )
    }
}

export default Indecision