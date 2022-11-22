import compatibilityCalculator from '../../utils/compatibilityCalculator'
import './index.css'

export function CompatibilityResultDisplayer({compatibilityResult, setCompatibilityResult}){
    return(
        <div className="compatibility-result-container">
            <h2>{compatibilityCalculator(compatibilityResult)}% Compatível</h2>
            <button className='continue-button' onClick={() => setCompatibilityResult(null)}>Continuar</button>
        </div>
    )
}