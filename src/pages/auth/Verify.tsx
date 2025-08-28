import React, { useState, useEffect } from 'react';
import { useNavigate, useSearchParams } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Alert, AlertDescription } from '@/components/ui/alert';
import { CheckCircle, XCircle, Clock, RefreshCw } from 'lucide-react';

const Verify = () => {
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const token = searchParams.get('token');
  
  const [status, setStatus] = useState<'loading' | 'success' | 'error' | 'expired'>('loading');
  const [nextStep, setNextStep] = useState<'existing_company' | 'new_company' | null>(null);

  useEffect(() => {
    if (!token) {
      setStatus('error');
      return;
    }

    // Simulate API call to verify email
    const verifyEmail = async () => {
      await new Promise(resolve => setTimeout(resolve, 2000));
      
      // Mock verification result
      const mockResults: Record<string, { success: boolean; isNewDomain?: boolean; expired?: boolean }> = {
        'valid-token': { success: true, isNewDomain: false },
        'new-domain-token': { success: true, isNewDomain: true },
        'expired-token': { success: false, expired: true },
        'invalid-token': { success: false, expired: false }
      };
      
      const result = mockResults[token] || mockResults['invalid-token'];
      
      if (result.success) {
        setStatus('success');
        setNextStep(result.isNewDomain ? 'new_company' : 'existing_company');
      } else if (result.expired) {
        setStatus('expired');
      } else {
        setStatus('error');
      }
    };

    verifyEmail();
  }, [token]);

  const handleContinue = () => {
    if (nextStep === 'new_company') {
      navigate('/company/register');
    } else if (nextStep === 'existing_company') {
      // In a real app, this would show role selection
      navigate('/auth/pending-approval');
    }
  };

  const handleResendVerification = () => {
    // Simulate resend API call
    console.log('Resending verification email...');
  };

  if (status === 'loading') {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gradient-subtle px-4">
        <Card className="w-full max-w-md animate-fade-in">
          <CardHeader className="text-center">
            <div className="mx-auto w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mb-4">
              <Clock className="w-6 h-6 text-primary animate-pulse" />
            </div>
            <CardTitle>Verifying Your Email</CardTitle>
            <CardDescription>
              Please wait while we verify your email address...
            </CardDescription>
          </CardHeader>
        </Card>
      </div>
    );
  }

  if (status === 'success') {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gradient-subtle px-4">
        <Card className="w-full max-w-md animate-fade-in">
          <CardHeader className="text-center">
            <div className="mx-auto w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mb-4">
              <CheckCircle className="w-6 h-6 text-green-600" />
            </div>
            <CardTitle>Email Verified Successfully!</CardTitle>
            <CardDescription>
              {nextStep === 'new_company' 
                ? 'Your email has been verified. Let\'s set up your company profile.'
                : 'Your email has been verified. Complete your registration by selecting your role.'
              }
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <Button 
              onClick={handleContinue}
              className="w-full"
            >
              {nextStep === 'new_company' ? 'Set Up Company' : 'Continue Registration'}
            </Button>
          </CardContent>
        </Card>
      </div>
    );
  }

  if (status === 'expired') {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gradient-subtle px-4">
        <Card className="w-full max-w-md animate-fade-in">
          <CardHeader className="text-center">
            <div className="mx-auto w-12 h-12 bg-yellow-100 rounded-full flex items-center justify-center mb-4">
              <Clock className="w-6 h-6 text-yellow-600" />
            </div>
            <CardTitle>Verification Link Expired</CardTitle>
            <CardDescription>
              This verification link has expired. Please request a new one.
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <Alert>
              <RefreshCw className="h-4 w-4" />
              <AlertDescription>
                Verification links expire after 24 hours for security reasons.
              </AlertDescription>
            </Alert>
            <Button 
              onClick={handleResendVerification}
              className="w-full"
            >
              Resend Verification Email
            </Button>
            <Button 
              variant="ghost" 
              className="w-full"
              onClick={() => navigate('/auth/login')}
            >
              Back to Login
            </Button>
          </CardContent>
        </Card>
      </div>
    );
  }

  // Error state
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-subtle px-4">
      <Card className="w-full max-w-md animate-fade-in">
        <CardHeader className="text-center">
          <div className="mx-auto w-12 h-12 bg-red-100 rounded-full flex items-center justify-center mb-4">
            <XCircle className="w-6 h-6 text-red-600" />
          </div>
          <CardTitle>Verification Failed</CardTitle>
          <CardDescription>
            We couldn't verify your email address. The link may be invalid or expired.
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <Alert variant="destructive">
            <XCircle className="h-4 w-4" />
            <AlertDescription>
              The verification link is invalid or has already been used.
            </AlertDescription>
          </Alert>
          <Button 
            onClick={handleResendVerification}
            variant="outline"
            className="w-full"
          >
            Request New Verification Email
          </Button>
          <Button 
            variant="ghost" 
            className="w-full"
            onClick={() => navigate('/auth/register')}
          >
            Back to Registration
          </Button>
        </CardContent>
      </Card>
    </div>
  );
};

export default Verify;