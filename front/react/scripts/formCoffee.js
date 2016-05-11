/*** @jsx Reac.DOM */
var CoffeeApp = React.createClass({

    count : 0,

    loadListUsers : function(callback){
        var url = "http://localhost:8000/api/consumers";
        var self = this;

        $.ajax(url).done(function(data){
            self.setState({
                consumers : data
            });

            var count = 0;

            data.records.forEach(function (item) {
               count += item.qtdCoffee;
            });

            self.setState({ count: count });

            if(callback)
                callback();
        });
    },

    getInitialState: function() {
        this.loadListUsers();
        return { showResults : false, count : 0 };
    },

    handleronClick : function(e){

        var id   = this.state.consumers.records[0]._id;
        var url  = "http://localhost:8000/api/consumer/"+ id +"/incrementcoffee";
        var self = this;

        $.ajax({
                    url: url,
                    method: 'put',
                    headers: { 'Content-Type' :  'application/json' }
                })
            .done(function(data){
                self.loadListUsers(function(){
                    self.setState({ showResults: true });
                });
            });
    },

    render : function() {
        return (
           <div>
               { this.state.showResults ? <WithCountCoffeComponet count={ this.state.count } handleronClick={this.handleronClick} /> : <WithoutCountCoffeComponent handleronClick={this.handleronClick} /> }
           </div>
        )
    }
});

var WithoutCountCoffeComponent = React.createClass({
    render : function(){
        return (
            <div className="container">
                <div className="row">
                    <div className="col-lg-12 text-center">
                        <h2>Gerenciador</h2>
                        <hr className="star-primary" />
                    </div>
                </div>
                <div className="row">
                    <div className="col-lg-4 col-lg-offset-2">
                        <p>Ajude-nos a gerenciar de forma inteligente nosso cafézinho,
                            se tiver consumido este prazer carnal clica no botão abaixo e ajude-nos.</p>
                    </div>
                    <div className="col-lg-8 col-lg-offset-2 text-center">
                        <button  onClick={this.props.handleronClick} className="btn btn-lg btn-success">
                            <i className="fa fa-plus"></i> CAFÉ
                        </button>
                    </div>
                </div>
            </div>
        )
    }
});


var WithCountCoffeComponet = React.createClass({

    render : function(){
        return (
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12 text-center">
                            <h2>Gerenciador</h2>
                            <hr className="star-primary" />
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-lg-8 col-lg-offset-2 text-center">
                            <h2>{this.props.count} cafés consumidos!!!</h2>
                        </div>
                    </div>
                    <br />
                    <div className="col-lg-8 col-lg-offset-2 text-center">
                        <button  onClick={this.props.handleronClick} className="btn btn-lg btn-success">
                            <i className="fa fa-plus"></i> CAFÉ
                        </button>
                    </div>
                </div>
        )
    }
});




ReactDOM.render(<CoffeeApp />, document.getElementById("gerenciador"));


